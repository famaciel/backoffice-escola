const FormularioEmergencial = ({ matricula }) => {
  return (
    <div className="formulario-emergencial">
      <h4>Autorização e Emergência</h4>
      <div className="student-form-field-container multiple">
        <label>Pessoas que podem ser procuradas em caso de emergência:</label>

        <div className="double-input-labels">
          <label>Nome</label>
          <label>Telefone</label>
        </div>
        <div className="double-input-container">
          <input
            name="nome_contato_emergencia_1"
            value={matricula.nome_contato_emergencia_1}
          />
          <input
            placeholder="( ) _____-____"
            name="telefone_contato_emergencia_1"
            value={matricula.telefone_contato_emergencia_1}
          />
        </div>
        <div className="double-input-container">
          <input
            name="nome_contato_emergencia_2"
            value={matricula.nome_contato_emergencia_2}
          />
          <input
            placeholder="( ) _____-____"
            name="telefone_contato_emergencia_2"
            value={matricula.telefone_contato_emergencia_2}
          />
        </div>
        <div className="double-input-container">
          <input
            name="nome_contato_emergencia_3"
            value={matricula.nome_contato_emergencia_3}
          />
          <input
            placeholder="( ) _____-____"
            name="telefone_contato_emergencia_3"
            value={matricula.telefone_contato_emergencia_3}
          />
        </div>
      </div>
      <div className="student-form-field-container">
        <label>Tipo Sanguíneo:</label>
        <input name="tipo_sanguineo" value={matricula.tipo_sanguineo} />
      </div>
      <div className="student-form-field-container">
        <label>Alergias:</label>
        <input name="alergias" value={matricula.alergias} />
      </div>
      <div className="student-form-field-container">
        <label>Restrição medica/alimentar:</label>
        <input name="restricoes" value={matricula.restricoes} />
      </div>
      <div className="student-form-field-container">
        <label>Medicamentos de uso contínuo:</label>
        <input
          name="medicamentos_continuos"
          value={matricula.medicamentos_continuos}
        />
      </div>
      <div className="student-form-field-container">
        <label>Observações adicionais:</label>
        <textarea
          name="observacoes_emergencia"
          value={matricula.observacoes_emergencia}
        />
      </div>
    </div>
  );
};

export default FormularioEmergencial;
