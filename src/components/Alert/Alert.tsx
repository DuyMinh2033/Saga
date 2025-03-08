import BottomSheet from '../BottomSheet';
import './styles.scss';

const Alert = ({ isOpen, onClose, title }) => {
  return (
    <BottomSheet title={'Alert'} open={isOpen} onClose={onClose}>
      <div className="container__alert">{title}</div>
    </BottomSheet>
  );
};

export default Alert;
