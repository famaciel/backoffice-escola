import CurrencyInput from "react-currency-input-field";
import ReactSelect from "react-select";

const integralOptions = [
  { label: "2 vezes", value: 2 },
  { label: "3 vezes", value: 3 },
  { label: "5 vezes", value: 5 },
];

const FormularioIntegral = ({
  matricula: { cabecalho, integral },
  onChangeValue,
}) => {
  const onSelectIntegralDays = (e) => {
    onChangeValue({
      target: {
        name: "integral",
        value: {
          ...integral,
          quantidade_dias: e.value,
          anuidade: cabecalho[`valorIntegral${e.value}x`],
        },
      },
    });
  };

  const onChangeIntegralElegivel = (e) => {
    const newValue = {
      ...integral,
      elegivel: e.target.checked,
    };

    if (!e.target.checked) {
      newValue.quantidade_dias = undefined;
      newValue.anuidade = undefined;
    }

    onChangeValue({
      target: {
        name: "integral",
        value: newValue,
      },
    });
  };

  return (
    <div className="formulario-integral">
      <h4>Integral</h4>

      <div className="student-form-row">
        <div className="student-form-field-container checkbox">
          <label>Quero incluir estudo em tempo integral</label>
          <input
            type="checkbox"
            onChange={onChangeIntegralElegivel}
            name="temIrmao"
            checked={integral.elegivel}
          />
        </div>

        {integral.elegivel && (
          <div className="student-form-field-container">
            <label>Quantos dias:</label>
            <ReactSelect
              options={integralOptions}
              onChange={onSelectIntegralDays}
              value={integralOptions.find(
                (a) => a.value === integral.quantidade_dias
              )}
            />
          </div>
        )}
      </div>

      {integral.quantidade_dias && (
        <div className="student-form-field-container">
          <label>Anuidade:</label>
          <CurrencyInput
            decimalsLimit={2}
            prefix="R$ "
            disabled
            name="anuidade"
            value={integral.anuidade}
          />
        </div>
      )}
    </div>
  );
};

export default FormularioIntegral;
