/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import './style.scss';

const BottomSheet = ({ open, children, title, onClose }) => {
  return (
    <div className={`overplay ${open ? 'show' : ''}`}>
      <div className={`container ${open ? 'up' : ''}`}>
        <div className="header__bottom">
          <p className="header__title">{title}</p>
          <div className="icon__close" onClick={() => onClose()}>
            <IoMdClose />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
