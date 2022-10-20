import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { formatarCelular } from "../../Utils";
import CadastroAluno from "./Form/CadastroAluno";
import "./ListaAlunos.scss";
import ReactLoading from "react-loading";
import ReactSelect from "react-select";
import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFilePen } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import whatsappLogo from "../../Utils/whatsapp.png";

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState(null);
  const [nucleos, setNucleos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState({});

  const formatStudent = (student, nucleos) => {
    return {
      ...student,
      nucleo: nucleos.find((a) => a.id === student.idNucleo)?.nome,
      contatoResp01_formatado: formatarCelular(student.contatoResp01),
      contatoResp02_formatado: formatarCelular(student.contatoResp02),
    };
  };

  const loadStudents = useCallback(async () => {
    console.log(search);
    setAlunos(null);

    const { data: alunos } = await axios.get(
      "https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr/busca",
      {
        params: search,
      }
    );

    const { data: nucleos } = await axios.get(
      "https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/nucleos"
    );

    setNucleos(nucleos);

    setAlunos(alunos.map((st) => formatStudent(st, nucleos)));
  }, [search]);

  const onSelectStudent = (st) => {
    setSelectedStudent(st);
    setShowForm(true);
  };

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const nucleoOptions = nucleos.map((a) => ({
    label: a.nome,
    value: a.id,
  }));

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      console.log(search);
      console.log(name, value);

      setSearch({
        ...search,
        [name]: value,
      });
    },
    [search]
  );

  const debouncedChangeHandler = useCallback(debounce(handleChange, 300), [
    search,
  ]);

  const openWhatsapp = (e) => {
    e.stopPropagation(0);

    window.open(
      "https://wa.me/+5511996684033?text=Ol%C3%A1%20%3CnomeResp01%3E.%20Abaixo%20enviamos%20o%20formul%C3%A1rio%20de%20solicita%C3%A7%C3%A3o%20de%20matr%C3%ADcula%20%20para%20o%20aluno%20%3CnomeAluno%3E,%20para%20o%20ano%20de%202023:%20",
      "_blank"
    );
  };

  return (
    <div>
      <div className="students-header">
        <div className="students-header-title">
          <h2>Alunos</h2>
          <p>Lista de alunos cadastrados</p>
        </div>

        <div className="students-header-actions">
          <div className="students-header-actions-combo">
            <input
              name="nome"
              placeholder="Nome aluno"
              onChange={debouncedChangeHandler}
            />
          </div>

          <div className="students-header-actions-combo">
            <input
              name="nomeResp"
              placeholder="Nome responsável"
              onChange={debouncedChangeHandler}
            />
          </div>

          <div className="students-header-actions-combo">
            <ReactSelect
              className="nucleo-select"
              options={[{ label: "Nenhum", value: null }, ...nucleoOptions]}
              placeholder="Núcleo"
              value={nucleoOptions.find((a) => a.value === search.nucleo)}
              onChange={(e) =>
                debouncedChangeHandler({
                  target: { name: "idnucleo", value: e.value },
                })
              }
            />
          </div>

          <button
            className="custom-button add-student-button"
            onClick={() => setShowForm(true)}
          >
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
            <h2>Ações</h2>
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

                <div className="student-row-cell">
                  <div className="action-buttons">
                    <Tooltip
                      enterDelay={100}
                      leaveDelay={0}
                      title="Visualizar matricula"
                    >
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="round-clickable-icon"
                      >
                        <FontAwesomeIcon
                          size="lg"
                          color="#2684ff"
                          icon={faFile}
                        />
                      </button>
                    </Tooltip>

                    <Tooltip
                      enterDelay={100}
                      leaveDelay={0}
                      title="Editar matricula"
                    >
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="round-clickable-icon"
                      >
                        <FontAwesomeIcon
                          size="lg"
                          color="#2684ff"
                          icon={faFilePen}
                        />
                      </button>
                    </Tooltip>

                    <Tooltip
                      enterDelay={100}
                      leaveDelay={0}
                      title="Enviar mensagem"
                    >
                      <button
                        onClick={openWhatsapp}
                        className="round-clickable-icon"
                      >
                        <img
                          className="whatsapp-icon"
                          src={whatsappLogo}
                          alt="Logo whatsapp"
                        />
                      </button>
                    </Tooltip>
                  </div>
                </div>
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
