import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormularioIntegral from "./Forms/FormularioIntegral";
import FormularioParent from "./Forms/FormularioParent";
import FormularioEmergencial from "./Forms/FormularioEmergencial";
import FormularioStudent from "./Forms/FormularioStudent";
import "./FormularioMatricula.scss";
import FormularioPermissoes from "./Forms/FormularioPermissoes";

const FormularioMatricula = () => {
  const [matricula, setMatricula] = useState({
    cabecalho: {},
    aluno: {},
    mae: {},
    pai: {},
    responsavel_financeiro: {},
    autorizacoes_emergencias: {},
    parentesco: {},
    integral: {},
  });

  const [student, setStudent] = useState({});
  const [step, setStep] = useState(0);

  const { studentId } = useParams();

  const onChangeValue = useCallback(
    ({ target: { name, value } }) => {
      console.log(name, value);

      setMatricula({
        ...matricula,
        [name]: value,
      });
    },
    [matricula]
  );

  const loadStudent = useCallback(async () => {
    const { data: student } = await axios.get(
      `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr/${studentId}`
    );

    const { data: cabecalho } = await axios.get(
      `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matricula/cabecalho/${studentId}`
    );

    setStudent(student);

    onChangeValue({
      target: {
        name: "cabecalho",
        value: {
          ...cabecalho,
          valorIntegral5x: cabecalho.valorIntegral,
        },
      },
    });
  }, [studentId]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  if (!matricula) return; // loading

  const submitForm = () => {
    console.log(matricula);
  };

  console.log(step);

  return (
    <div className="matricula-form">
      <div className="matricula-form-header">
        <h2>Escola dos Sonhos</h2>
        <h3>Ficha de matrícula 2023</h3>
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="round-clickable-icon previous-step-button"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="3x" />
        </button>
      )}

      {step === 5 || (step === 4 && !matricula.cabecalho.temIntegral) ? (
        <button
          onClick={submitForm}
          className="round-clickable-icon next-step-button"
        >
          <FontAwesomeIcon icon={faCheck} size="3x" />
        </button>
      ) : (
        <button
          onClick={() => setStep(step + 1)}
          className="round-clickable-icon next-step-button"
        >
          <FontAwesomeIcon icon={faArrowRight} size="3x" />
        </button>
      )}

      {step === 0 && (
        <FormularioStudent
          matricula={matricula}
          student={student}
          onChangeValue={onChangeValue}
        />
      )}

      {step === 1 && (
        <div className="parents-form">
          <FormularioParent
            parent="mae"
            parentName="Mãe"
            matricula={matricula}
            onChangeValue={onChangeValue}
          />

          <FormularioParent
            parent="pai"
            parentName="Pai"
            matricula={matricula}
            onChangeValue={onChangeValue}
          />
        </div>
      )}

      {step === 2 && (
        <FormularioParent matricula={matricula} onChangeValue={onChangeValue} />
      )}

      {step === 3 && (
        <FormularioEmergencial
          matricula={matricula}
          onChangeValue={onChangeValue}
        />
      )}

      {step === 4 && (
        <FormularioPermissoes
          matricula={matricula}
          onChangeValue={onChangeValue}
        />
      )}

      {step === 5 && (
        <FormularioIntegral
          matricula={matricula}
          onChangeValue={onChangeValue}
        />
      )}
    </div>
  );
};

export default FormularioMatricula;
