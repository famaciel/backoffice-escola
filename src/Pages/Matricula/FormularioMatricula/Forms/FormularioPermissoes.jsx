import { useCallback } from "react";

const FormularioPermissoes = ({
  matricula: { seguranca },
  onChangeValue,
  readonly,
}) => {
  const onChange = useCallback(
    ({ target: { name, value } }) => {
      onChangeValue({
        seguranca: {
          ...seguranca,
          [name]: value,
        },
      });
    },
    [onChangeValue, seguranca]
  );

  const onChangeAutorizaoSaidaSozinho = (e) => {
    onChangeValue({
      seguranca: {
        ...seguranca,
        autorizaoSaidaSozinho: e.target.checked,
      },
    });
  };

  const onChangePermissaoPessoa = useCallback(
    ({ target: { name, value } }, index) => {
      const newPessoas = seguranca.pessoas;

      if (!newPessoas[index]) newPessoas.push({});

      newPessoas[index][name] = value;

      onChangeValue({
        seguranca: {
          ...seguranca,
          pessoas: [...newPessoas],
        },
      });
    },
    [onChangeValue, seguranca]
  );
  return (
    <div className="matricula-form-fields">
      <h4>Segurança</h4>
      <div className="student-form-field-container multiple">
        <label>
          Além dos responsáveis, estas pessoas estão autorizadas a retirar o(a)
          estudante da escola:
        </label>

        <div className="double-input-labels">
          <label>Nome</label>
          <label>Parentesco</label>
        </div>

        {!(readonly && !seguranca.pessoas[0].nome) && (
          <div className="double-input-container">
            <input
              name="nome"
              onChange={(e) => onChangePermissaoPessoa(e, 0)}
              value={seguranca.pessoas[0]?.nome}
            />
            <input
              name="parentesco"
              onChange={(e) => onChangePermissaoPessoa(e, 0)}
              value={seguranca.pessoas[0]?.parentesco}
            />
          </div>
        )}
        {!(readonly && !seguranca.pessoas[1].nome) && (
          <div className="double-input-container">
            <input
              name="nome"
              onChange={(e) => onChangePermissaoPessoa(e, 1)}
              value={seguranca.pessoas[1]?.nome}
            />
            <input
              name="parentesco"
              onChange={(e) => onChangePermissaoPessoa(e, 1)}
              value={seguranca.pessoas[1]?.parentesco}
            />
          </div>
        )}
        {!(readonly && !seguranca.pessoas[2].nome) && (
          <div className="double-input-container">
            <input
              name="nome"
              onChange={(e) => onChangePermissaoPessoa(e, 2)}
              value={seguranca.pessoas[2]?.nome}
            />
            <input
              name="parentesco"
              onChange={(e) => onChangePermissaoPessoa(e, 2)}
              value={seguranca.pessoas[2]?.parentesco}
            />
          </div>
        )}
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container checkbox">
          <label>Eu autorizo o estudante a sair sozinho da escola ao final das atividades escolares ou do turno escola.</label>
          <input
            type="checkbox"
            onChange={onChangeAutorizaoSaidaSozinho}
            name="autorizaoSaidaSozinho"
            checked={seguranca.autorizaoSaidaSozinho}
          />
        </div>
      </div>

      <div className="student-form-field-container">
        <label>Observações adicionais:</label>
        <textarea
          onChange={onChange}
          name="observacoes"
          value={seguranca.observacoes}
        />
      </div>
    </div>
  );
};

export default FormularioPermissoes;
