import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import "./FormularContrato.scss";
import FormularioParent from "../../Matricula/FormularioMatricula/Forms/FormularioParent";
import FormularioIntegral from "../../Matricula/FormularioMatricula/Forms/FormularioIntegral";
import ReactSelect from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";

const parcelaOptions = [
  {
    label: "1x",
    value: 1,
  },
  {
    label: "2x",
    value: 2,
  },
  {
    label: "12x",
    value: 12,
  },
  {
    label: "13x",
    value: 13,
  },
];

const parcelaTaxasOptions = [
  {
    label: "1x",
    value: 1,
  },
  {
    label: "2x",
    value: 2,
  },
  {
    label: "12x",
    value: 12,
  }
];

const FormularContrato = () => {
  const { studentId } = useParams();

  const [contrato, setContrato] = useState(null);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);

  const loadContrato = useCallback(async () => {
    try {
      setInitialLoading(true);

      let [{ data: contrato }] = await Promise.all([
        axios.get(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/contrato/${studentId}`
        ),
      ]);

      setContrato(contrato);
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      setInitialLoading(false);
    }
  }, [studentId]);

  const calculate = useCallback(
    async (ct = contrato) => {
      try {
        if (!ct.desconto) {
          ct.desconto = {
            valor: 0,
            porcentagem: 0,
          };
        }

        let [{ data: calculo }] = await Promise.all([
          axios.post(
            `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/contrato/calculo`,
            {
              id: studentId,
              desconto: ct.desconto,
              parcelamento: ct.parcelamento || 12,
            }
          ),
        ]);

        console.log(ct);
        console.log(calculo);

        setContrato({
          ...ct,
          ...calculo,
        });
      } catch (err) {
        console.error("ERROR: ", err);
      }
    },
    [studentId, contrato]
  );

  const calculateTaxas = useCallback(
    async (ct = contrato) => {
      try {
        let [{ data: calculo }] = await Promise.all([
          axios.post(
            `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/contrato/calculotaxas`,
            {
              parcelamentoTaxas: ct.parcelamentoTaxas || 12,
            }
          ),
        ]);

        console.log(ct);
        console.log(calculo);

        setContrato({
          ...ct,
          ...calculo,
        });
      } catch (err) {
        console.error("ERROR: ", err);
      }
    },
    [studentId, contrato]
  );

  const onChangeParcela = useCallback(
    ({ value }) => {
      setContrato({
        ...contrato,
        parcelamento: value,
      });

      calculate({
        ...contrato,
        parcelamento: value,
      });
    },
    [calculate, contrato]
  );

  const onChangeParcelaTaxas = useCallback(
    ({ value }) => {
      setContrato({
        ...contrato,
        parcelamentoTaxas: value,
      });

      calculateTaxas({
        ...contrato,
        parcelamentoTaxas: value,
      });
    },
    [calculateTaxas, contrato]
  );

  const onChange = useCallback(
    ({ target: { name, value } }) => {
      setContrato({
        ...contrato,
        [name]: value,
      });
    }
  );

  const onSubmit = useCallback(async () => {
    try {
      setSubmitLoading(true);

      await Promise.all([
        axios.post(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/contrato`,
          {
            id: studentId,
            ...contrato,
          }
        ),
      ]);

      setSubmitSuccess(true);
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      setSubmitLoading(false);
    }
  }, [studentId, contrato]);

  const openPreviewContratoImpressao = (e) => {
    e.stopPropagation(0);
    window.open(`/preview-contrato/${studentId}`, "_blank");
  };

  useEffect(() => {
    loadContrato();
  }, [loadContrato]);

  const onChangeDesconto = ({ target: { name, value } }) => {
    const newContrato = {
      ...contrato,
    };

    if (name === "valor") {
      newContrato.desconto.porcentagem = 0;
      newContrato.desconto.valor = Number(value);
    } else if (name === "porcentagem") {
      newContrato.desconto.valor = 0;
      newContrato.desconto.porcentagem = Number(value);
    }

    setContrato({
      ...newContrato,
    });
  };

  if (initialLoading || !contrato) {
    return (
      <div className="submit-loading-container">
        <h1>Carregando contrato...</h1>
        <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
      </div>
    );
  }

  if (submitLoading) {
    return (
      <div className="submit-loading-container">
        <h1>Registrando contrato...</h1>
        <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="submit-loading-container">
        <h1>Contrato cadastrado com sucesso!</h1>
        <FontAwesomeIcon icon={faCheck} color="#2684ff" size="5x" />
      </div>
    );
  }

  return (
    <div className="formulario-contrato">
      <h1>Gerar Contrato</h1>

      <div>
        <div className="matricula-form-fields">
          <div className="student-form-row">
            <div className="student-form-field-container">
              <label>Nome:</label>
              <input disabled name="nome" value={contrato.nomeAluno} />
            </div>
            <div className="student-form-field-container">
              <label>Núcleo:</label>
              <input disabled name="nucleo" value={contrato.nomeNucleo} />
            </div>
          </div>

          <div className="student-form-row">
            <div className="student-form-field-container">
              <label>Anuidade:</label>
              <CurrencyInput
                disabled
                decimalsLimit={2}
                decimalScale={2}
                prefix="R$ "
                value={contrato.valorAnuidade}
              />
            </div>

            <div className="student-form-field-container">
              <label>{contrato.termoTaxas}:</label>
              <CurrencyInput
                disabled
                decimalsLimit={2}
                decimalScale={2}
                prefix="R$ "
                value={contrato.valorTaxas}
              />
            </div>
          </div>
        </div>

        <FormularioParent
          parent="respFinanceiro"
          parentName="Responsável financeiro"
          dadosParent={contrato.respFinanceiro}
          isContrato
          readonly
        />

        <FormularioIntegral matricula={contrato} isContrato readonly />
      </div>

      <h4>Descontos</h4>
      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Valor:</label>
          <input
            name="valor"
            type="number"
            onChange={onChangeDesconto}
            value={contrato.desconto.valor}
          />
        </div>

        <div className="student-form-field-container">
          <label>Porcentagem:</label>
          <input
            type="number"
            name="porcentagem"
            onChange={onChangeDesconto}
            value={contrato.desconto.porcentagem}
          />
        </div>

        <button className="calc-button" onClick={() => calculate()}>
          Recalcular
        </button>
      </div>

      <h4>Cálculo</h4>
      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Parcelas:</label>
          <ReactSelect
            options={parcelaOptions}
            name="parcelamento"
            value={parcelaOptions.find(
              (a) => a.value === contrato.parcelamento
            )}
            onChange={onChangeParcela}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Anuidade - Final:</label>
          <CurrencyInput
            disabled
            decimalsLimit={2}
            decimalScale={2}
            prefix="R$ "
            value={contrato.valorAnuidadeFinal}
          />
        </div>
        <div className="student-form-field-container">
          <label>Parcela Anuidade:</label>
          <CurrencyInput
            disabled
            decimalsLimit={2}
            decimalScale={2}
            prefix="R$ "
            value={contrato.parcelaAnuidade}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Parcelas Taxas:</label>
          <ReactSelect
            options={parcelaTaxasOptions}
            name="parcelamentoTaxas"
            value={parcelaTaxasOptions.find(
              (a) => a.value === contrato.parcelamentoTaxas
            )}
            onChange={onChangeParcelaTaxas}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Parcela Taxas:</label>
          <CurrencyInput
            disabled
            decimalsLimit={2}
            decimalScale={2}
            prefix="R$ "
            value={contrato.parcelaTaxas}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Observações adicionais:</label>
          <textarea
            name="observacoes"
            onChange={onChange}
            value={contrato.observacoes}
          />
        </div>
      </div>

      <div className="contrato-footer">
        <button className="custom-button" onClick={onSubmit}>
          Cadastrar
        </button>
        <button className="custom-button" 
          onClick={(e) => openPreviewContratoImpressao(e)}>
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default FormularContrato;
