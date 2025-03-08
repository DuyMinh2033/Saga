import { useState } from 'react';

import FrequencyCty from '../../common/components/FrequencyCty/FrequencyCty';
import SelectFrequencyBottom from '../../common/components/SelectFrequecyBottom';
import SelectTime from '../../common/components/SelectYear';
import ViewBottomTerm from '../../common/components/ViewBottomTerm';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsopen3] = useState(false);
  return (
    <div>
      <SelectFrequencyBottom open={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)}>Select One</button>
      <FrequencyCty open={isOpen2} onClose={() => setIsOpen2(false)} />
      <button onClick={() => setIsOpen2(true)}>Select Two</button>
      <ViewBottomTerm isOpen={isOpen3} onClose={() => setIsopen3(false)} />
      <button onClick={() => setIsopen3(true)}>Show Terms</button>
      <SelectTime />
    </div>
  );
};

export default Notification;
