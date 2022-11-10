import React from "react";
import "./MatriculaPreview.scss";
import logo from "../../../Utils/logo.jpg";
import FormularioIntegral from "../FormularioMatricula/Forms/FormularioIntegral";
import FormularioParent from "../FormularioMatricula/Forms/FormularioParent";
import FormularioEmergencial from "../FormularioMatricula/Forms/FormularioEmergencial";
import FormularioStudent from "../FormularioMatricula/Forms/FormularioStudent";
import FormularioPermissoes from "../FormularioMatricula/Forms/FormularioPermissoes";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const MatriculaPreview = () => {
  const { studentId } = useParams();

  const [matricula, setMatricula] = useState(null);
  const [student, setStudent] = useState(null);

  const [initialLoading, setInitialLoading] = useState(false);

  const [isPrinting, setIsPrinting] = useState(false);

  const loadStudent = useCallback(async () => {
    try {
      setInitialLoading(true);

      let [{ data: student }, { data: cabecalho }, { data: matricula }] =
        await Promise.all([
          axios.get(
            `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr/${studentId}`
          ),
          axios.get(
            `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matricula/cabecalho/${studentId}`
          ),
          axios.get(
            `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matriculas/${studentId}`
          ),
        ]);

      setStudent(student);

      setMatricula({
        ...matricula,
        cabecalho: {
          ...cabecalho,
          valorIntegral5x: cabecalho.valorIntegral,
        },
      });
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      setInitialLoading(false);
    }
  }, [studentId]);

  useEffect(() => {
    loadStudent();

    window.matchMedia("print").addEventListener("change", (mql) => {
      setIsPrinting(mql.matches);
    });
  }, [loadStudent]);

  if (initialLoading || !matricula || !student) {
    return (
      <div className="submit-loading-container">
        <h1>Buscando matrícula...</h1>
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
            <h3>Ficha de matrícula 2023</h3>
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

          <FormularioStudent onChangeValue={() => {}} matricula={matricula} />

          <FormularioParent
            parentName="Mãe"
            parent="mae"
            dadosParent={matricula.mae}
            onChangeValue={() => {}}
          />

          <FormularioParent
            parentName="Pai"
            parent="pai"
            dadosParent={matricula.pai}
            onChangeValue={() => {}}
          />

          <FormularioParent
            parent="respFinanceiro"
            parentName="Responsável financeiro"
            dadosParent={matricula.respFinanceiro}
            onChangeValue={() => {}}
          />

          <FormularioEmergencial
            matricula={matricula}
            onChangeValue={() => {}}
          />

          <FormularioPermissoes
            matricula={matricula}
            onChangeValue={() => {}}
          />

          <FormularioIntegral matricula={matricula} onChangeValue={() => {}} />

          <div
            style={{
              textAlign: "center",
              marginTop: 60,
              paddingBottom: 60,
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
                marginTop: 30,
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

export default MatriculaPreview;
