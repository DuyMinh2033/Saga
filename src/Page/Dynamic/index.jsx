import { useState } from "react";
import FormPreview from "../../components/Prew";
import FormBuilder from "../../components/FormBuilder";

const DynamicPage = () => {
  const [formFields, setFormFields] = useState([]);
  const [preview, setPreview] = useState(false);

  const handleAddField = (field) => {
    setFormFields([...formFields, field]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    setFormFields(updatedFields);
  };

  const togglePreview = () => setPreview(!preview);

  return (
    <div style={{ color: "white" }}>
      <h1>Dynamic Form Builder</h1>
      {preview ? (
        <FormPreview fields={formFields} />
      ) : (
        <FormBuilder
          formFields={formFields}
          onAddField={handleAddField}
          onRemoveField={handleRemoveField}
        />
      )}
      <button style={{ color: "white" }} onClick={togglePreview}>
        {preview ? "Edit Form" : "Preview Form"}
      </button>
    </div>
  );
};

export default DynamicPage;
