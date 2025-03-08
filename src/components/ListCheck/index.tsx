import { Fragment } from 'react';
import { MdNavigateNext } from 'react-icons/md';

import './style.scss';

const ListCheck = ({ config, checked, setChecked, hidden = false, onClickView }) => {
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
  const handleClickView = (value) => {
    onClickView(value);
  };
  return (
    <div>
      <div>
        <label style={{ display: 'flex', gap: '10px', position: 'relative' }}>
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
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {options.map((item) => (
          <Fragment key={item}>
            <div style={{ position: 'relative' }}>
              <label className="item__term">
                <input
                  type="checkbox"
                  onChange={(e) => handleOnchange(e, item.value)}
                  checked={checked.includes(item.value)}
                />
                <p>{item.label}</p>
              </label>
              <div className={`icon__view ${hidden ? 'hidden' : ''}`}>
                <MdNavigateNext size={25} onClick={() => handleClickView(item.value)} />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListCheck;
