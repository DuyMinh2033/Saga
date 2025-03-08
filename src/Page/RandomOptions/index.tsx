import { useRef, useState } from 'react';

import './style.scss';

const RandomOptions = () => {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('1. ');
  console.log('🚀 ~ RandomOptions ~ input:', input);
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e) => {
    trigger.current = false;
    setInput(e.target.value);
  };
  const trigger = useRef(false);
  const handleAddOptions = () => {
    trigger.current = true;
    const newOptions = input
      .split('\n')
      .map((line) => {
        const match = line.match(/^\d+\.\s*(.+)$/);
        return match ? match[1].trim() : null;
      })
      .filter((option) => option);
    setOptions(newOptions);
    alert('your options added');
  };

  const handleSpin = () => {
    if (options.length === 0) return;
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * options.length);
    setTimeout(() => {
      setSelectedOption(options[randomIndex]);
      setSpinning(false);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const lines = input.split('\n');
      const nextNumber = lines.length + 1;
      setInput(input + `\n${nextNumber}. `);
    }
  };

  if (selectedOption && !spinning) {
    alert(`ket qua la ${selectedOption}`);
  }
  return (
    <div className="App">
      <h1>Vòng Quay Random</h1>
      {input && trigger.current && <div className="text__desc">{input}</div>}

      <div className="input-container">
        <textarea
          className="input_selection"
          type="text"
          placeholder="Nhập các tùy chọn, cách nhau bằng dấu phẩy"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddOptions}>Thêm Tùy Chọn</button>
        <button onClick={handleSpin} disabled={spinning}>
          Quay
        </button>
      </div>
    </div>
  );
};

export default RandomOptions;
