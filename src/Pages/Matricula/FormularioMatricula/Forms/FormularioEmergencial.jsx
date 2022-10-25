const FormularioEmergencial = ({ matricula }) => {
  return (
    <div>
      <h4>Emergencias</h4>
      <div className="student-form-field-container multiple">
        <label>Pessoas que podem ser procuradas em caso de emergência:</label>
        <input
          name="contato_emergencia_1"
          value={matricula.contato_emergencia_1}
        />
        <input
          name="contato_emergencia_2"
          value={matricula.contato_emergencia_2}
        />
        <input
          name="contato_emergencia_3"
          value={matricula.contato_emergencia_3}
        />
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
