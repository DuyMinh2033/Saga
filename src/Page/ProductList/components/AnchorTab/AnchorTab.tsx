import './styles.scss';

const AnchorTab = (props) => {
  const { clazz, type, segments = [], active } = props;
  const handleClickChip = (index, chipItem) => {
    chipItem.handleClick(chipItem.value);
  };

  return (
    <div className="anchor__tab__wrapper">
      {segments?.map((chip, idx) => {
        return (
          <div
            key={idx}
            className={`anchor__tab__item ${type} ${clazz} ${active === chip.value ? 'active__tab' : ''}`}
            onClick={() => handleClickChip(idx, chip)}
          >
            <span>{chip.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AnchorTab;
