import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { formatarCelular } from "../../Utils";
import CadastroAluno from "./Form/CadastroAluno";
import "./ListaAlunos.scss";
import ReactLoading from "react-loading";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState(null);
  const [nucleos, setNucleos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const formatStudent = (student, nucleos) => {
    return {
      ...student,
      nucleo: nucleos.find((a) => a.id === student.idNucleo)?.nome,
      contatoResp01_formatado: formatarCelular(student.contatoResp01),
      contatoResp02_formatado: formatarCelular(student.contatoResp02),
    };
  };

  const loadStudents = useCallback(async () => {
    const { data: alunos } = await axios.get(
      "https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr"
    );

    const { data: nucleos } = await axios.get(
      "https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/nucleos"
    );

    setNucleos(nucleos);

    setAlunos(alunos.map((st) => formatStudent(st, nucleos)));
  }, []);

  const onSelectStudent = (st) => {
    setSelectedStudent(st);
    setShowForm(true);
  };

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  return (
    <div>
      <div className="students-header">
        <div className="students-header-title">
          <h2>Alunos</h2>
          <p>Lista de alunos cadastrados</p>
        </div>

        <div className="students-header-actions">
          <input placeholder="Buscar alunos" />

          <button className="custom-button" onClick={() => setShowForm(true)}>
            + Adicionar aluno
          </button>
        </div>
      </div>

      {!alunos && (
        <div className="loading-students-container">
          <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
        </div>
      )}
      {alunos && (
        <div className="students">
          <div className="students-list-header">
            <h2>Aluno</h2>
            <h2>Responsáveis</h2>
            <h2>Contatos</h2>
            {/* <h2>Ações</h2> */}
          </div>
          <ul className="students-list">
            {alunos.map((st) => (
              <li
                key={st.id}
                onClick={() => onSelectStudent(st)}
                className="student-row"
              >
                <div className="student-row-cell">
                  <p className="title">{st.nome}</p>
                  <p className="opacity">{st.nucleo || "--"}</p>
                </div>

                <div className="student-row-cell">
                  <p>{st.nomeResp01}</p>
                  <p>{st.nomeResp02}</p>
                </div>

                <div className="student-row-cell">
                  <p>{st.contatoResp01_formatado}</p>
                  <p>{st.contatoResp02_formatado}</p>
                </div>

                {/* <div className="student-row-cell">
                  <button></button>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`animator ${showForm && "show"} student-form-container`}>
        {showForm && (
          <CadastroAluno
            closeForm={(shouldLoadStudents) => {
              setShowForm(false);
              setSelectedStudent(null);

              if (shouldLoadStudents) loadStudents();
            }}
            nucleos={nucleos}
            student={selectedStudent}
          />
        )}
      </div>
    </div>
  );
};

export default ListaAlunos;
