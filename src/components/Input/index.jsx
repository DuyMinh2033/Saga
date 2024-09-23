/* eslint-disable react/prop-types */
import "./style.scss";
const Input = (props) => {
  const { onBlur = () => {}, className, ...field } = props;

  const handleBlur = () => {
    onBlur();
  };
  return (
    <div>
      <input type="text" {...field} onBlur={handleBlur} className={className} />
    </div>
  );
};

export default Input;
