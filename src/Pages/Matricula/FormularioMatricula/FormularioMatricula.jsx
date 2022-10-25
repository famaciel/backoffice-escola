import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormularioFinancial from "./Forms/FomularioFinancial";
import FormularioParent from "./Forms/FormularioParent";
import FormularioEmergencial from "./Forms/FormularioEmergencial";
import FormularioStudent from "./Forms/FormularioStudent";
import "./FormularioMatricula.scss";
import FormularioPermissoes from "./Forms/FormularioPermissoes";

const FormularioMatricula = () => {
  const [matricula, setMatricula] = useState(null);
  const [step, setStep] = useState(1);

  const { studentId } = useParams();

  const loadStudent = useCallback(async () => {
    const { data: student } = await axios.get(
      `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr/${studentId}`
    );
    setMatricula(student);
  }, [studentId]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  if (!matricula) return; // loading

  const onChangeValue = ({ target: { name, value } }) => {
    console.log(name, value);
  };

  return (
    <div className="matricula-form">
      <div className="matricula-form-header">
        <h2>Ficha de matrícula</h2>
        <h3>Educação infantil</h3>
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="round-clickable-icon previous-step-button"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="3x" />
        </button>
      )}

      {step < 4 && (
        <button
          onClick={() => setStep(step + 1)}
          className="round-clickable-icon next-step-button"
        >
          <FontAwesomeIcon icon={faArrowRight} size="3x" />
        </button>
      )}

      {step === 4 && (
        <button
          onClick={() => setStep(step + 1)}
          className="round-clickable-icon next-step-button"
        >
          <FontAwesomeIcon icon={faCheck} size="3x" />
        </button>
      )}

      {step === 0 && (
        <FormularioStudent
          matricula={matricula}
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

      {step === 2 && <FormularioFinancial matricula={matricula} />}

      {step === 3 && <FormularioEmergencial matricula={matricula} />}

      {step === 4 && <FormularioPermissoes matricula={matricula} />}
    </div>
  );
};

export default FormularioMatricula;
