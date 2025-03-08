import { useEffect, useRef, useState } from 'react';

import RadioOptions from '../../../common/components/RadioOptions';
import Input from '../../../components/Input';
import { optionsRadio } from '../contanst';

import { InputOptions, Name } from './contans';
import './styles.scss';

const Section = () => {
  const [showFor, setShowForm] = useState('');
  const [formShow, setFormShow] = useState('');
  const [arrForm, setArrForm] = useState([Name]);
  const valueForm = useRef([]);
  const handleAdd = () => {
    setArrForm((prevArr) => [...prevArr, { ...Name }]);
  };

  const handleInputChange = (index, field, value) => {
    arrForm[index][field] = value;
    valueForm.current = arrForm;
  };

  const remove = (idx) => {
    if (arrForm.length === 1) return;
    const filter = arrForm.filter((_, index) => index !== idx);
    setArrForm(filter);
  };
  const renderForm = (index) => {
    return (
      <div key={index} className="form__section">
        <Input
          placeholder="Country"
          onChange={(e) => handleInputChange(index, InputOptions.country, e.target.value)}
        />
        <Input
          placeholder="City"
          onChange={(e) => handleInputChange(index, InputOptions.city, e.target.value)}
        />
        <button onClick={() => remove(index)}>Remove</button>
      </div>
    );
  };
  const handleSubmit = () => {
    console.log(valueForm.current);
  };

  useEffect(() => {
    if (formShow === optionsRadio[1]) {
      valueForm.current = [];
    }
  }, [formShow]);

  const check = showFor === optionsRadio[0] || showFor === optionsRadio[1];
  return (
    <div>
      <p>Are you a tax resident or citizen of the U.S.?</p>
      <RadioOptions options={optionsRadio} onChangeValue={(item) => setShowForm(item)} />
      {showFor === optionsRadio[0] && <input placeholder="enter hi" />}
      {check && (
        <>
          <p>Are you sure enter country</p>
          <RadioOptions options={optionsRadio} onChangeValue={(item) => setFormShow(item)} />
        </>
      )}

      <div className="form__container">
        {formShow === optionsRadio[0] && arrForm.map((_, index) => renderForm(index))}
      </div>

      {formShow === optionsRadio[0] && <button onClick={handleAdd}>Add form</button>}
      <button onClick={handleSubmit}>Submit Form</button>
    </div>
  );
};

export default Section;
