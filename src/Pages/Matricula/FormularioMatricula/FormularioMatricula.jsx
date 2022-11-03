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

const fakeMatricula = {
  dadosGerais: {
    endereco: {
      rua: "Rua Luis Correia de Melo",
      numero: "92",
      bairro: "Vila Cruzeiro",
      cep: "04726220",
      contatoResidencial: "(11) 99668-4033",
      contatoRecado: "(11) 97162-4558",
    },
    nome: "Emilly Cacelli Gregorio",
    dataNascimento: "03/05/2020",
    sexo: "F",
    naturalDe: "São Paulo",
    estado: "SP",
  },
  mae: {
    nome: "Marianna Courrol Cacelli",
    dataNascimento: "11/09/1992",
    rg: "554878595",
    cpf: "42434618804",
    profissao: "Analista Contabil",
    localTrabalho: "Etna",
    cargo: "Analista contabil",
    contatoPrincipal: "(11) 97162-4558",
    contatoCelular: "",
    email: "mcacelli@outlook.com",
  },
  pai: {
    nome: "Mauricio Gregorio",
    dataNascimento: "03/08/1998",
    rg: "557868014",
    cpf: "46147576852",
    profissao: "Desenvolvedor",
    localTrabalho: "Zup IT",
    cargo: "Programador",
    contatoPrincipal: "(11) 99668-4033",
    contatoCelular: "",
    email: "msgregorio@outlook.com",
  },
  respFinanceiro: {
    nome: "Mauricio Gregorio",
    dataNascimento: "03/08/1998",
    rg: "557868014",
    cpf: "46147576852",
    profissao: "Desenvolvedor",
    localTrabalho: "Zup IT",
    cargo: "Programador",
    contatoPrincipal: "(11) 99668-4033",
    contatoCelular: "",
    email: "msgregorio@outlook.com",
  },
  integral: {
    opcao: true,
    qtdeDias: 3,
    anuidade: 27962.87,
  },
  seguranca: {
    pessoas: [
      {
        nome: "Selene Maria da Silva",
        parentesco: "Avó",
      },
    ],
  },
  autorizacoes: {
    pessoas: [
      {
        nome: "Selene Maria da Silva",
        contato: "11991132663",
      },
    ],
    tipoSanguineo: "A+",
  },
  cabecalho: {
    nomeAluno: "Ágatha Moreira Zanette",
    nomeNucleo: "Desenvolvimento - 3º",
    valorAnuidade: 17555.84,
    valorTaxas: 450,
    temIntegral: true,
    valorIntegral: 31082.21,
    valorIntegral2x: 25748.03,
    valorIntegral3x: 27962.87,
    valorIntegral5x: 31082.21,
  },
};

const FormularioMatricula = () => {
  const [matricula, setMatricula] = useState(null);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [student, setStudent] = useState({});
  const [step, setStep] = useState(0);

  const { studentId } = useParams();

  const onChangeValue = useCallback(
    (value) => {
      console.log(value);

      setMatricula({
        ...matricula,
        ...value,
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

    let { data: matricula } = await axios.get(
      `https://6ln1gs0gk9.execute-api.us-east-1.amazonaws.com/dev/matriculas/${studentId}`
    );

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
  }, [studentId]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  if (!matricula) return; // loading

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

  if (!matricula) return;

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
        <h1>Matricula cadastrada com sucesso!</h1>
        <FontAwesomeIcon icon={faCheck} color="#2684ff" size="5x" />
      </div>
    );
  }

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
    </div>
  );
};

export default FormularioMatricula;
