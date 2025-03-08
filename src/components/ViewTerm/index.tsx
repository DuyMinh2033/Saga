import { useRef } from 'react';

import BottomSheet from '../BottomSheet';
import './style.scss';

const ViewTerm = ({ open, title, onClose, content, value, confirm }) => {
  const refBottom = useRef(null);
  const refContainer = useRef(null);
  const handleConFirm = () => {
    if (refBottom.current && refContainer.current) {
      const bottom = refBottom.current.getBoundingClientRect().bottom;
      const container = refContainer.current.getBoundingClientRect().bottom;
      if (container < Math.floor(bottom)) {
        refBottom.current.scrollIntoView({
          behavior: 'smooth',
        });
      } else if (container >= Math.floor(bottom)) {
        confirm(value);
      }
    }
  };

  return (
    <BottomSheet open={open} title={title} onClose={onClose}>
      <div className="container__term">
        <div className="content" ref={refContainer}>
          <p>{content}</p>
          <div ref={refBottom} />
        </div>
        <div className="btn">
          <button onClick={handleConFirm}>Confirm</button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default ViewTerm;
