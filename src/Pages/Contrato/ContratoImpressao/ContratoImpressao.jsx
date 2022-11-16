import React from "react";
import "./ContratoImpressao.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../Utils/logo2.jpg";

const ContratoImpressao = () => {

  const { studentId } = useParams();

  const [contrato, setContrato] = useState(null);

  const [initialLoading, setInitialLoading] = useState(false);

  const [isPrinting, setIsPrinting] = useState(false);

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
    <div ref={ref} className="contrato-impressao">

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

      <table className="contrato-table">
        <tr>
          <td className="contrato-td-logo"><img src={logo} alt="logo2" /></td>
          <td>
            <table>
              <tr>
                <td>
                  <p>
                  <b>CONTRATO DE PRESTAÇÃO DE SERVIÇOS EDUCACIONAIS</b><br></br>
                  <b>ESCOLA DOS SONHOS</b><br></br>
                  <b>{contrato.tituloContrato}</b>
                  </p>
                </td>
              </tr>
            </table>
          </td>  
        </tr>
      </table>

      <table className="contrato-table-dados">
        <tr>
          <td colspan="2">Contratante/Responsável Financeiro: <label>{contrato.respFinanceiro.nome}</label></td>
        </tr>
        <tr>
          <td colspan="2">Endereço: <label>{contrato.dadosGerais.endereco.rua} - {contrato.dadosGerais.endereco.numero}</label></td>
        </tr>
        <tr>
          <td>Bairro: <label>{contrato.dadosGerais.endereco.bairro}</label></td>
          <td>CEP: <label>{contrato.dadosGerais.endereco.cep}</label></td>
        </tr>
        <tr>
          <td>CPF: <label>{contrato.respFinanceiro.cpf}</label></td>
          <td>RG: <label>{contrato.respFinanceiro.rg}</label></td>
        </tr>
        <tr>
          <td colspan="2">Data de Nascimento: <label>{contrato.respFinanceiro.dataNascimento}</label></td>
        </tr>
        <tr>
          <td>Telefone: <label>{contrato.respFinanceiro.contatoPrincipal}</label></td>
          <td>Celular: <label>{contrato.respFinanceiro.contatoCelular}</label></td>
        </tr>
        <tr>
          <td colspan="2">E-mail: <label>{contrato.respFinanceiro.email}</label></td>
        </tr>
        <tr>
          <td colspan="2">Educando/Aluno: <label>{contrato.nomeAluno}</label></td>
        </tr>
        <tr>
          <td colspan="2">Turma:</td>
        </tr>
        
      </table>

      <p>
      Por meio do presente instrumento particular de um lado o CONTRATANTE, na qualidade de representante legal do educando, qualificado na ficha de matrícula e no quadro acima, que passa a fazer parte do presente contrato, e de outro lado, como CONTRATADA: Aruana Projetos Educacionais 
      Ltda ME, pessoa jurídica de direito privado, com sede à Rua Cristóvão Machado de Campos, 1380, Vargem Grande Florianópolis, CNPJ nº 21.962.608/0001-77 e inscrição estadual isenta, Mantenedora da <b><u>ESCOLA DOS SONHOS</u></b> firmam o presente CONTRATO DE PRESTAÇÃO DE SERVIÇOS EDUCACIONAIS para o ano letivo de 2023.
      </p>

      <p>Considerando:</p>

      <ul >
        <li>A liberdade do ensino pela iniciativa privada e o pluralismo pedagógico, princípios expressos 
      nos artigos 205, 206 e 209 da Constituição Federal;</li>
        <li>A consciente opção do CONTRATANTE pelo ensino particular, expressa na Lei n. 9.870/99 e 
      na Lei Complementar de Santa Catarina n. 170/98;</li>
        <li>O artigo 1.566 do Código Civil Brasileiro e 55 e 56 do Estatuto da Criança e Adolescente que 
      atribuem aos pais ou responsáveis a obrigação de matrícula escolar e supervisão do 
      rendimento dos educandos;</li>
        <li>O artigo 15 e seguintes do Estatuto da Criança e Adolescente que asseguram aos educandos 
      o direito de liberdade e dignidade, inclusive atribuem aos pais à obrigação de respeito aos 
      objetos pessoais, especialmente no que se refere ao material escolar de uso individual que são 
      essenciais para atender às necessidades de aprendizagem do educando;
      </li>
        <li>Que o educando/aluno, beneficiário exclusivo da prestação de serviço educacional, que deverá 
      observar os princípios de comportamento e conduta éticos, morais e disciplinares, respeitar as 
      normas de boa convivência coletiva junto aos demais integrantes da comunidade escolar, 
      condutas necessárias e compatíveis com o desenvolvimento da educação e do ensino, resolvem:</li>
      </ul> 
      



    </div>
  );

};

export default ContratoImpressao;