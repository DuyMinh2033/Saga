function FieldEditor({ field = {}, onFieldChange }) {
  return (
    <div>
      <h3>Field Editor</h3>
      <div>
        <label>Label: </label>
        <input name="label" value={field.label} onChange={onFieldChange} />
      </div>
      <div>
        <label>Type: </label>
        <select name="type" value={field.type} onChange={onFieldChange}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
        </select>
      </div>
    </div>
  );
}

export default FieldEditor;
