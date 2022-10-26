const FormularioPermissoes = ({ matricula }) => {
  return (
    <div>
      <h4>Parentesco</h4>
      <div className="student-form-field-container multiple">
        <label>
          Além dos responsáveis, estas pessoas estão autorizadas a retirar o(a)
          estudante da escola:
        </label>

        <div className="double-input-labels">
          <label>Nome</label>
          <label>Parentesco</label>
        </div>
        <div className="double-input-container">
          <input
            name="nome_permitido_retirar_1"
            value={matricula.nome_permitido_retirar_1}
          />
          <input
            name="parentesco_permitido_retirar_1"
            value={matricula.parentesco_permitido_retirar_1}
          />
        </div>
        <div className="double-input-container">
          <input
            name="nome_permitido_retirar_2"
            value={matricula.nome_permitido_retirar_2}
          />
          <input
            name="parentesco_permitido_retirar_2"
            value={matricula.parentesco_permitido_retirar_2}
          />
        </div>
        <div className="double-input-container">
          <input
            name="nome_permitido_retirar_3"
            value={matricula.nome_permitido_retirar_3}
          />
          <input
            name="parentesco_permitido_retirar_3"
            value={matricula.parentesco_permitido_retirar_3}
          />
        </div>
      </div>

      <div className="student-form-field-container">
        <label>Observações adicionais:</label>
        <textarea
          name="observacoes_retirada"
          value={matricula.observacoes_retirada}
        />
      </div>
    </div>
  );
};

export default FormularioPermissoes;
