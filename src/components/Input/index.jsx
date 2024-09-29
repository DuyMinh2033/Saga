/* eslint-disable react/prop-types */
import "./style.scss";
const Input = (props) => {
  const { onBlur = () => {}, className, ...field } = props;

  const handleBlur = () => {
    onBlur();
  };
  return (
    <div>
      <input type="text" onBlur={handleBlur} className={className} {...field} />
    </div>
  );
};

export default Input;
