import ReactSelect from "react-select";

const FormularioIntegral = ({ matricula, onChangeValue }) => {
  return (
    <div className="formulario-integral">
      <h4>Integral</h4>

      <div className="student-form-row">
        <div className="student-form-field-container checkbox">
          <label>Quero incluir estudo em tempo integral</label>
          <input
            type="checkbox"
            onChange={(e) =>
              onChangeValue({
                target: {
                  name: e.target.name,
                  value: e.target.checked,
                },
              })
            }
            name="temIrmao"
            checked={matricula.integral}
          />
        </div>

        <div className="student-form-field-container">
          <label>Quantos dias:</label>
          <ReactSelect
            options={[
              { label: "2 vezes", value: 2 },
              { label: "3 vezes", value: 3 },
              { label: "5 vezes", value: 5 },
            ]}
          />
        </div>
      </div>

      <div className="student-form-field-container">
        <label>Anuidade:</label>
        <input disabled name="anuidade" value={matricula.anuidade} />
      </div>
    </div>
  );
};

export default FormularioIntegral;
