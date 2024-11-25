/* eslint-disable react/prop-types */
import "./style.scss";
const Input = (props) => {
  const { placeholder, onBlur = () => {}, className, ...field } = props;

  const handleBlur = () => {
    onBlur();
  };
  return (
    <div>
      <input
        placeholder={placeholder}
        type="number"
        onBlur={handleBlur}
        className={className}
        {...field}
      />
    </div>
  );
};

export default Input;
