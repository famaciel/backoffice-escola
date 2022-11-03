import { useCallback } from "react";
import ReactInputMask from "react-input-mask";

const FormularioParent = ({
  dadosParent,
  parent,
  parentName,
  onChangeValue,
}) => {
  const onChange = useCallback(
    ({ target: { name, value } }) => {
      console.log(name, value);

      onChangeValue({
        [parent]: {
          ...dadosParent,
          [name]: value,
        },
      });
    },
    [parent, onChangeValue, dadosParent]
  );

  return (
    <div className="matricula-form-fields">
      {parentName && (
        <h4>
          Dados {parent === "mae" ? "da" : "do"} {parentName}
        </h4>
      )}

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Nome:</label>
          <input onChange={onChange} name="nome" value={dadosParent.nome} />
        </div>

        <div className="student-form-field-container">
          <label>Data de nascimento:</label>
          <ReactInputMask
            placeholder="__/__/_____"
            mask="99/99/9999"
            name="dataNascimento"
            onChange={onChange}
            value={dadosParent.dataNascimento}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>RG:</label>
          <ReactInputMask
            onChange={onChange}
            name="rg"
            value={dadosParent.rg}
          />
        </div>

        <div className="student-form-field-container">
          <label>CPF:</label>
          <ReactInputMask
            onChange={onChange}
            name="cpf"
            value={dadosParent.cpf}
          />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Profissao:</label>
          <input
            onChange={onChange}
            name="profissao"
            value={dadosParent.profissao}
          />
        </div>

        <div className="student-form-field-container">
          <label>Local de trabalho:</label>
          <input
            onChange={onChange}
            name="localTrabalho"
            value={dadosParent.localTrabalho}
          />
        </div>

        <div className="student-form-field-container">
          <label>Cargo:</label>
          <input onChange={onChange} name="cargo" value={dadosParent.cargo} />
        </div>
      </div>

      <div className="student-form-row">
        <div className="student-form-field-container">
          <label>Telefone:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="( _ ) _____-____"
            name="contatoPrincipal"
            onChange={onChange}
            value={dadosParent.contatoPrincipal}
          />
        </div>

        <div className="student-form-field-container">
          <label>Celular:</label>
          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="( _ ) _____-____"
            name="contatoCelular"
            onChange={onChange}
            value={dadosParent.contatoCelular}
          />
        </div>

        <div className="student-form-field-container">
          <label>E-mail:</label>
          <input onChange={onChange} name="email" value={dadosParent.email} />
        </div>
      </div>
    </div>
  );
};

export default FormularioParent;
