function FormPreview({ fields = [] }) {
  return (
    <div>
      <h2>Form Preview</h2>
      {fields.length === 0 ? (
        <p>No fields added.</p>
      ) : (
        fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            {field.type === 'text' && <input type="text" />}
            {field.type === 'number' && <input type="number" />}
            {field.type === 'checkbox' && <input type="checkbox" />}
            {field.type === 'dropdown' && (
              <select>
                <option value="">Select an option</option>
              </select>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default FormPreview;
