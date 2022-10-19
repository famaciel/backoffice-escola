import { useState } from "react";
import "./CadastroAluno.scss";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CadastroAluno = ({ closeForm, nucleos, student: studentToUpdate }) => {
  console.log(studentToUpdate);
  const [student, setStudent] = useState(
    studentToUpdate || {
      ano: 0,
      nomeResp01: "",
      nomeResp02: "",
      contatoResp01: "",
      contatoResp02: "",
      ehFidelidade: false,
      foiMatriculado: false,
      nome: "",
      temIrmao: false,
      idNucleo: "",
    }
  );

  const nucleoOptions = nucleos.map((a) => ({
    label: a.nome,
    value: a.id,
  }));

  const onChangeValue = (e) => {
    console.log(e);

    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onSubmitForm = () => {
    console.log(student);
  };

  return (
    <div className="student-form">
      <div className="student-form-title">
        <button onClick={closeForm} className="student-form-close-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>Cadastrar aluno</h2>
      </div>

      <div className="student-form-fields">
        <div className="student-form-col">
          <div className="student-form-field-container">
            <label>Nome:</label>
            <input onChange={onChangeValue} name="nome" value={student.nome} />
          </div>

          <div className="student-form-field-container">
            <label>Nome responsável #1:</label>
            <input
              onChange={onChangeValue}
              name="nomeResp01"
              value={student.nomeResp01}
            />
          </div>

          <div className="student-form-field-container">
            <label>Nome responsável #2:</label>
            <input
              onChange={onChangeValue}
              name="nomeResp02"
              value={student.nomeResp02}
            />
          </div>
        </div>

        <div className="student-form-col">
          <div className="student-form-field-container">
            <label>Núcleo:</label>
            <Select
              options={nucleoOptions}
              value={nucleoOptions.find((a) => a.value === student.idNucleo)}
            />
          </div>

          <div className="student-form-field-container checkbox">
            <label>Fidelidade:</label>
            <input
              type="checkbox"
              onChange={onChangeValue}
              name="ehFidelidade"
              checked={student.ehFidelidade}
            />
          </div>

          <div className="student-form-field-container checkbox">
            <label>Com irmão:</label>
            <input
              type="checkbox"
              onChange={onChangeValue}
              name="temIrmao"
              checked={student.temIrmao}
            />
          </div>

          <div className="student-form-field-container">
            <label>Contato #2:</label>
            <input
              onChange={onChangeValue}
              name="contatoResp01"
              value={student.contatoResp01}
            />
          </div>

          <div className="student-form-field-container">
            <label>Contato #2:</label>
            <input
              onChange={onChangeValue}
              name="contatoResp02"
              value={student.contatoResp02}
            />
          </div>
        </div>
      </div>

      <div className="student-form-footer">
        <button className="custom-button" onClick={onSubmitForm}>
          CONFIRMAR
        </button>
      </div>
    </div>
  );
};

export default CadastroAluno;
