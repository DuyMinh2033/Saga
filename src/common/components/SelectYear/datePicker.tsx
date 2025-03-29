/* eslint-disable prettier/prettier */
import { useCallback, useMemo, useState } from 'react';
import './style.scss';
import { FaChevronDown } from 'react-icons/fa';
import { GrPrevious, GrNext } from 'react-icons/gr';

import { arrDay } from './contanst';

const SelectDate = () => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDay, setSelectDay] = useState(null);

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDayIndex = date.getDay();
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const handleNextMonth = useCallback(() => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    setSelectDay(null);
  }, []);

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    setSelectDay(null);
  }, []);

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()),
    [currentDate],
  );

  const handleSelectDay = useCallback((day) => {
    if (day !== null) {
      setSelectDay(day);
    }
  }, []);

  const handleSubmit = () => {
    if (selectDay !== null) {
      const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectDay);
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const dayOfWeek = selectedDate.getDay();
      const daysOfWeek = [
        'Chủ Nhật',
        'Thứ Hai',
        'Thứ Ba',
        'Thứ Tư',
        'Thứ Năm',
        'Thứ Sáu',
        'Thứ Bảy',
      ];
      const dayName = daysOfWeek[dayOfWeek];

      alert(`Ngày: ${day}\nTháng: ${month}\nNăm: ${year}\nThứ: ${dayName}`);
    } else {
      alert(`No date`);
    }
  };

  return (
    <>
      <div className={`overlay-select ${open ? 'show' : ''}`}>
        <div className={`container-select ${open ? 'up' : 'down'}`}>
          <div className="select-header">
            <h1 className="header-title">Select Date</h1>
            <div className="header-close " onClick={() => setOpen(false)}>
              <img src="./img/close.png" alt="" className="header-icon" />
            </div>
          </div>
          <div className="select-body">
            <div className="body-container">
              <div className="body-header">
                <div className="title">
                  <p>{`${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`}</p>
                  <FaChevronDown />
                </div>
                <div className="prev-next">
                  <GrPrevious className="prev" onClick={handlePrevMonth} />
                  <GrNext className="next" onClick={handleNextMonth} />
                </div>
              </div>

              <div className="date">
                {arrDay.map((item, index) => (
                  <p key={index}>{item.day}</p>
                ))}
              </div>
              <div className="body-content">
                {daysInMonth.map((day, index) => (
                  <div key={index} className="item-day" onClick={() => handleSelectDay(day)}>
                    <p className={`${day ? '' : 'empty'} ${selectDay === day ? 'selected' : ''}`}>
                      {day}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="btn-submit">
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => setOpen(!open)}>Show</button>
    </>
  );
};

export default SelectDate;
