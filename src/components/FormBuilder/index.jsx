import { useState } from "react";
import FieldEditor from "../FieldEditor";

// eslint-disable-next-line react/prop-types
function FormBuilder({ formFields = [], onAddField, onRemoveField }) {
  const [newField, setNewField] = useState({ label: "", type: "text" });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setNewField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    onAddField(newField);
    setNewField({ label: "", type: "text" });
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <FieldEditor field={newField} onFieldChange={handleFieldChange} />
      <button onClick={handleAdd} style={{ color: "white" }}>
        Add Field
      </button>

      <div>
        <h3>Fields:</h3>
        {formFields?.map((field, index) => (
          <div key={index}>
            <span>
              {field.label} ({field.type})
            </span>
            <button
              onClick={() => onRemoveField(index)}
              style={{ color: "white" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormBuilder;
