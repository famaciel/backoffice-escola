import ReactInputMask from "react-input-mask";

const FormularioFinancial = ({ matricula }) => {
  return (
    <div>
      <h4>Dados financeiros</h4>
      <div className="student-form-field-container">
        <label>Nome responsável financeiro:</label>
        <input
          name="responsavel_financeiro"
          value={matricula.responsavel_financeiro}
        />
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Tel. Responsavel:</label>
          <ReactInputMask
            placeholder="( _ ) _____-____"
            mask="(99) 99999-9999"
            name="telefone_responsavel"
            value={matricula.telefone_responsavel}
          />
        </div>

        <div className="student-form-field-container">
          <label>Tel. Comercial:</label>
          <ReactInputMask
            placeholder="( _ ) _____-____"
            mask="(99) 99999-9999"
            name="telefone_comercial"
            value={matricula.telefone_comercial}
          />
        </div>

        <div className="student-form-field-container">
          <label>Celular:</label>
          <ReactInputMask
            placeholder="( _ ) _____-____"
            mask="(99) 99999-9999"
            name="celular"
            value={matricula.celular}
          />
        </div>
      </div>
    </div>
  );
};

export default FormularioFinancial;
