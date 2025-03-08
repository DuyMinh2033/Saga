import { useRef, useState } from 'react';

import './style.scss';

const Input = (props) => {
  const {
    placeholder,
    onBlur = () => {},
    className,
    onChange = () => {},
    regex,
    type = 'text',
    value,
    maxLength,
    ...other
  } = props;

  const isEnterKeyBoard = useRef(false);
  const isProcessKey = useRef(false);
  const [isTrick, setIsTrick] = useState(true);
  const validateInput = (value) => {
    let checkMaxLength;
    if (regex) {
      if (isProcessKey.current) return;
      value = value.replace(regex, '');
    }
    if (maxLength) {
      let enc = new TextEncoder();
      let uint8 = enc.encode(value);
      checkMaxLength = uint8.length > maxLength;
    }
    if (!checkMaxLength) {
      onChange(value);
    } else {
      setIsTrick(false);
    }
  };

  const handleOnChange = (e) => {
    let value = e.target.value;
    console.log('🚀 ~ handleOnChange ~ value:', value);
    validateInput(value);
  };

  const handleOnBlur = (e) => {
    isEnterKeyBoard.current = false;
    onBlur(e);
  };

  const handleKeyDown = (event) => {
    if (!isEnterKeyBoard.current) isEnterKeyBoard.current = true;
    // if (!regex) return;
    const { key } = event;
    if (key === 'Backspace') {
      setIsTrick(true);
    }
    // const newRegex = new RegExp(regex);
    // if (key === "Process" || newRegex.test(key)) {
    //   isProcessKey.current = true;
    //   event.preventDefault();
    // } else {
    //   isProcessKey.current = false;
    // }
  };
  // useEffect(() => {
  //   if (!value) {
  //     setIsTrick(true);
  //   }
  // }, [value]);
  const ref = useRef(null);

  const handleClear = () => {
    onChange('');
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div className="input__wrapper">
      <input
        ref={ref}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          if (isTrick) {
            handleOnChange(e);
          }
        }}
        onKeyDown={handleKeyDown}
        autoComplete="new-password"
        onBlur={handleOnBlur}
        {...other}
      />
      <p className="icon__clear" onClick={handleClear} />
    </div>
  );
};

export default Input;
