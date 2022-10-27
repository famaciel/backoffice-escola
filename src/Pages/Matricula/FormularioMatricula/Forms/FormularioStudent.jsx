import ReactInputMask from "react-input-mask";
import CurrencyInput from "react-currency-input-field";

const FormularioStudent = ({
  matricula: { cabecalho, aluno },
  student,
  onChangeValue,
}) => {
  return (
    <div className="matricula-form-fields">
      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Nome:</label>
          <input disabled name="nome" value={cabecalho.nomeAluno} />
        </div>
        <div className="student-form-field-container">
          <label>Núcleo:</label>
          <input disabled name="nucleo" value={cabecalho.nomeNucleo} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Anuidade:</label>
          <CurrencyInput
            disabled
            decimalsLimit={2}
            prefix="R$ "
            name="anuidade"
            value={cabecalho.valorAnuidade}
          />
        </div>

        <div className="student-form-field-container">
          <label>Taxas:</label>
          <CurrencyInput
            disabled
            decimalsLimit={2}
            prefix="R$ "
            name="taxas"
            value={cabecalho.valorTaxas}
          />
        </div>
      </div>

      <h4>Dados do(a) estudante</h4>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Nome:</label>
          <input name="nome" value={aluno.nome} />
        </div>

        <div className="student-form-field-container">
          <label>Data de nascimento:</label>
          <ReactInputMask
            placeholder="__/__/_____"
            mask="99/99/9999"
            name="data_nascimento"
            value={aluno.data_nascimento}
          />
        </div>

        <div className="student-form-field-container">
          <label>Sexo</label>
          <div>
            <input type="radio" value="Male" name="gender" /> Masculino
            <input type="radio" value="Female" name="gender" /> Feminino
          </div>
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Natural de:</label>
          <input name="natural_de" value={aluno.natural_de} />
        </div>

        <div className="student-form-field-container">
          <label>Estado:</label>
          <input name="estado" value={aluno.estado} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Endereço residencial:</label>
          <input name="endereco" value={aluno.endereco} />
        </div>

        <div className="student-form-field-container">
          <label>Numero:</label>
          <input type="number" name="numero" value={aluno.numero} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Bairro:</label>
          <input name="bairro" value={aluno.bairro} />
        </div>

        <div className="student-form-field-container">
          <label>CEP:</label>
          <input name="cep" value={aluno.cep} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Telefone Residencial:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            name="contatoResp01"
            value={aluno.contatoResp01}
          />
        </div>

        <div className="student-form-field-container">
          <label>Telefone recado:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            name="contatoResp02"
            value={aluno.contatoResp02}
          />
        </div>
      </div>
    </div>
  );
};

export default FormularioStudent;
