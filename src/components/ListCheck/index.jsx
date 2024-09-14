import { Fragment } from "react";

/* eslint-disable react/prop-types */
const ListCheck = ({ config, checked, setChecked }) => {
  const { selectAllLabel, options = [] } = config;

  const handleOnchange = (e, value) => {
    if (e.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter((item) => item != value));
    }
  };
  const onchangeAll = (e) => {
    if (e.target.checked) {
      setChecked(options.map((item) => item.value));
    } else {
      setChecked([]);
    }
  };

  return (
    <div>
      <div>
        <label style={{ display: "flex", gap: "10px" }}>
          <input
            onChange={onchangeAll}
            type="checkbox"
            checked={options.length === checked.length}
          />
          <p>{selectAllLabel}</p>
        </label>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {options.map((item) => (
          <Fragment key={item}>
            <label style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                onChange={(e) => handleOnchange(e, item.value)}
                checked={checked.includes(item.value)}
              />
              <p>{item.label}</p>
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListCheck;
