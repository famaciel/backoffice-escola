import React from "react";
import "./ContratoPreview.scss";
import logo from "../../../Utils/logo.jpg";
import FormularioParent from "../../Matricula/FormularioMatricula/Forms/FormularioParent";
import FormularioIntegral from "../../Matricula/FormularioMatricula/Forms/FormularioIntegral";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ContratoPreview = () => {
  const { studentId } = useParams();

  const [contrato, setContrato] = useState(null);

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

  useEffect(() => {
    loadContrato();

    window.matchMedia("print").addEventListener("change", (mql) => {
      setIsPrinting(mql.matches);
    });
  }, [loadContrato]);

  if (initialLoading || !contrato) {
    return (
      <div className="submit-loading-container">
        <h1>Carregando contrato...</h1>
        <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
      </div>
    );
  }

  const ref = React.createRef();

  return (
    <>
      <div ref={ref}>
        <div className="matricula-form preview">
          <div className="matricula-form-header">
            <img src={logo} alt="logo" />
            <h2>Escola dos Sonhos</h2>
            <h3>Contrato de Prestação de Serviços - 2023</h3>
          </div>

          {!isPrinting && (
            <button
              style={{
                position: "absolute",
                right: "15px",
                top: "15px",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={() => {
                setIsPrinting(true);

                setTimeout(() => {
                  window.print();
                }, 300);
              }}
            >
              BAIXAR / IMPRIMIR{" "}
              <FontAwesomeIcon icon={faDownload} style={{ marginLeft: 15 }} />
            </button>
          )}

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
              <label>Taxas:</label>
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

          <div
            style={{
              textAlign: "center",
              marginTop: 40,
              paddingBottom: 40,
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Florianópolis, ______ de _____________________ de _______</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 10,
              }}
            >
              <div>
                <p>_______________________________________</p>
                <h3>Responsável Financeiro</h3>
              </div>
              <div>
                <p>_______________________________________</p>
                <h3>Responsável Acadêmico</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratoPreview;
