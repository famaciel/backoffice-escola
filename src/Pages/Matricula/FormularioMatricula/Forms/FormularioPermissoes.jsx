const FormularioPermissoes = ({ matricula }) => {
  return (
    <div>
      <h4>Parentesco</h4>
      <div className="student-form-field-container multiple">
        <label>
          Além dos responsáveis, estas pessoas estão autorizadas a retirar o(a)
          estudante da escola:
        </label>
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
    </div>
  );
};

export default FormularioPermissoes;
