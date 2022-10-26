import ReactInputMask from "react-input-mask";

const FormularioParent = ({ matricula, parentName }) => {
  return (
    <div className="matricula-form-fields">
      {parentName && <h4>Dados da {parentName}</h4>}
      {!parentName && <h4>Responsável financeiro</h4>}

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
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>RG:</label>
          <ReactInputMask name="rg" value={matricula.rg} />
        </div>

        <div className="student-form-field-container">
          <label>CPF:</label>
          <ReactInputMask name="cpf" value={matricula.cpf} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Profissao:</label>
          <input name="profissao" value={matricula.profissao} />
        </div>

        <div className="student-form-field-container">
          <label>Local de trabalho:</label>
          <input name="local_trabalho" value={matricula.local_trabalho} />
        </div>

        <div className="student-form-field-container">
          <label>Cargo:</label>
          <input name="cargo" value={matricula.cargo} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Telefone:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="( _ ) _____-____"
            name="telefone_responsavel"
            value={matricula.telefone_responsavel}
          />
        </div>

        <div className="student-form-field-container">
          <label>Celular:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="( _ ) _____-____"
            name="profissao"
            value={matricula.profissao}
          />
        </div>

        <div className="student-form-field-container">
          <label>E-mail:</label>
          <input name="profissao" value={matricula.profissao} />
        </div>
      </div>
    </div>
  );
};

export default FormularioParent;
