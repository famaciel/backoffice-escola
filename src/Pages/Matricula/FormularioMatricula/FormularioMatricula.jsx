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
import ReactLoading from "react-loading";
import InfoDocumentos from "./Forms/InfoDocumentos";
import DownloadDocuments from "./Forms/DownloadDocuments";
import logo from "../../../Utils/logo.jpg";

const fakeFiles = [
  {
    nome: "Contrato",
    id: "a8c3dd9e-6908-4ef5-938e-2d63e26c6ed4",
    url: "http://escoladossonhos-gestao.s3-website-us-east-1.amazonaws.com/Escola_Sonhos_Contrato.pdf",
    idNucleo: "cf909149-ab87-470e-862c-6bc9c58f4881",
    descricao: "Contrato de Presta\u00e7\u00e3o de Servi\u00e7o",
  },
  {
    nome: "Dados",
    id: "6571d6fd-8496-43a1-a0c9-fb542009f45f",
    url: "http://escoladossonhos-gestao.s3-website-us-east-1.amazonaws.com/Escola_Sonhos_Dados.pdf",
    idNucleo: "cf909149-ab87-470e-862c-6bc9c58f4881",
    descricao: "Dados sobre a escola",
  },
  {
    nome: "Informa\u00e7\u00f5es",
    id: "7d3144bf-9108-4897-a21b-cd13f9291c9c",
    url: "http://escoladossonhos-gestao.s3-website-us-east-1.amazonaws.com/Escola_Sonhos_Informacoes.pdf",
    idNucleo: "cf909149-ab87-470e-862c-6bc9c58f4881",
    descricao: "Informa\u00e7\u00f5es extras",
  },
];

const FormularioMatricula = () => {
  const [matricula, setMatricula] = useState(null);
  const [student, setStudent] = useState(null);
  const [filesToDownload, setFilesToDownload] = useState([]);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);

  const [step, setStep] = useState(0);

  const { studentId } = useParams();

  const onChangeValue = useCallback(
    (value) => {
      setMatricula({
        ...matricula,
        ...value,
      });
    },
    [matricula]
  );

  const loadStudent = useCallback(async () => {
    try {
      setInitialLoading(true);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, 3000);
      });

      let [
        { data: student },
        { data: cabecalho },
        { data: matricula },
        { data: filesToDownload },
      ] = await Promise.all([
        axios.get(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/alunosmatr/${studentId}`
        ),
        axios.get(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matricula/cabecalho/${studentId}`
        ),
        axios.get(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matriculas/${studentId}`
        ),
        axios.get(
          `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/docs/aluno/${studentId}`
        ),
      ]);

      console.log(student, cabecalho, matricula);

      if (matricula.statusCode === 404) {
        matricula = {
          dadosGerais: { endereco: {} },
          mae: {},
          pai: {},
          respFinanceiro: {},
          integral: {},
          seguranca: { pessoas: [] },
          autorizacoes: { pessoas: [] },
        };
      }

      setStudent(student);

      setMatricula({
        ...matricula,
        cabecalho: {
          ...cabecalho,
          valorIntegral5x: cabecalho.valorIntegral,
        },
      });

      setFilesToDownload(filesToDownload);
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      setInitialLoading(false);
    }
  }, [studentId]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  const submitForm = async () => {
    try {
      setSubmitLoading(true);

      await axios.post(
        `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matriculas`,
        {
          id: student.id,
          idNucleo: matricula.cabecalho.idNucleo,
          ...matricula,
        }
      );

      setSubmitLoading(false);
      setSubmitSuccess(true);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  console.log(initialLoading);

  if (initialLoading || !matricula || !student) {
    return (
      <div className="submit-loading-container">
        <h1>Buscando matricula...</h1>
        <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
      </div>
    );
  }

  if (submitLoading) {
    return (
      <div className="submit-loading-container">
        <h1>Registrando matricula...</h1>
        <ReactLoading type="bars" color="#2684ff" height={50} width={50} />
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="submit-loading-container">
        <h1>Matricula enviada com sucesso!</h1>
        <p>A lista de materiais será enviada em janeiros de 2023 via e-mail</p>
        <FontAwesomeIcon icon={faCheck} color="#2684ff" size="5x" />
      </div>
    );
  }

  return (
    <div className="matricula-form">
      <div className="matricula-form-header">
        <img src={logo} alt="logo" />
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

      {step === 7 ? (
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
          onChangeValue={onChangeValue}
        />
      )}

      {step === 1 && (
        <div className="parents-form">
          <FormularioParent
            parentName="Mãe"
            parent="mae"
            dadosParent={matricula.mae}
            onChangeValue={onChangeValue}
          />

          <FormularioParent
            parentName="Pai"
            parent="pai"
            dadosParent={matricula.pai}
            onChangeValue={onChangeValue}
          />
        </div>
      )}

      {step === 2 && (
        <FormularioParent
          parent="respFinanceiro"
          parentName="Responsável financeiro"
          dadosParent={matricula.respFinanceiro}
          onChangeValue={onChangeValue}
        />
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

      {step === 6 && <InfoDocumentos />}

      {step === 7 && <DownloadDocuments filesToDownload={filesToDownload} />}
    </div>
  );
};

export default FormularioMatricula;
