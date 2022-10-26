import ReactInputMask from "react-input-mask";

const FormularioStudent = ({ matricula, onChangeValue }) => {
  return (
    <div className="matricula-form-fields">
      <h4>Cabeçalho</h4>
      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Nome:</label>
          <input name="nome" value={matricula.nome} />
        </div>
        <div className="student-form-field-container">
          <label>Núcleo:</label>
          <input name="nucleo" value={matricula.nucleo} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Anuidade:</label>
          <input name="anuidade" value={matricula.anuidade} />
        </div>

        <div className="student-form-field-container">
          <label>Taxas:</label>
          <input name="taxas" value={matricula.taxas} />
        </div>
      </div>

      <h4>Dados do(a) estudante</h4>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Nome:</label>
          <input name="nome" value={matricula.nome} />
        </div>

        <div className="student-form-field-container">
          <label>Data de nascimento:</label>
          <ReactInputMask
            placeholder="__/__/_____"
            mask="99/99/9999"
            name="data_nascimento"
            value={matricula.data_nascimento}
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
          <input name="natural_de" value={matricula.natural_de} />
        </div>

        <div className="student-form-field-container">
          <label>Estado:</label>
          <input name="estado" value={matricula.estado} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Endereço residencial:</label>
          <input name="endereco" value={matricula.endereco} />
        </div>

        <div className="student-form-field-container">
          <label>Numero:</label>
          <input type="number" name="numero" value={matricula.numero} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Bairro:</label>
          <input name="bairro" value={matricula.bairro} />
        </div>

        <div className="student-form-field-container">
          <label>CEP:</label>
          <input name="cep" value={matricula.cep} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Telefone Residencial:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            name="contatoResp01"
            value={matricula.contatoResp01}
          />
        </div>

        <div className="student-form-field-container">
          <label>Telefone recado:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            name="contatoResp02"
            value={matricula.contatoResp02}
          />
        </div>
      </div>
    </div>
  );
};

export default FormularioStudent;
