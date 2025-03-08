import './style.scss';

const InputDropDown =
  // eslint-disable-next-line no-unused-vars
  ({ showIcon = false, ...field }) => {
    return (
      <>
        <div className="container__input">
          <input type="text" className="input__item" {...field} />
        </div>
      </>
    );
  };

export default InputDropDown;
