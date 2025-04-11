import { useState } from 'react';
<<<<<<< Updated upstream

import FrequencyCty from '../../common/components/FrequencyCty/FrequencyCty';
import SelectFrequencyBottom from '../../common/components/SelectFrequecyBottom';
import SelectTime from '../../common/components/SelectYear';
import ViewBottomTerm from '../../common/components/ViewBottomTerm';
=======
import SelectFrequencyBottom from '../../common/components/SelectFrequecyBottom';
import FrequencyCty from '../../common/components/FrequencyCty/FrequencyCty';
import ViewBottomTerm from '../../common/components/ViewBottomTerm';
import SelectTime from '../../common/components/SelectYear';
>>>>>>> Stashed changes

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsopen3] = useState(false);
  return (
<<<<<<< Updated upstream
    <div className="flex flex-col gap-20">
      <SelectFrequencyBottom open={isOpen} onClose={() => setIsOpen(false)} />
=======
    <div>
      {isOpen && <SelectFrequencyBottom open={isOpen} onClose={() => setIsOpen(false)} />}
>>>>>>> Stashed changes
      <button onClick={() => setIsOpen(true)}>Select One</button>
      {isOpen2 && <FrequencyCty open={isOpen2} onClose={() => setIsOpen2(false)} />}
      <button onClick={() => setIsOpen2(true)}>Select Two</button>
      <ViewBottomTerm isOpen={isOpen3} onClose={() => setIsopen3(false)} />
      <button onClick={() => setIsopen3(true)}>Show Terms</button>
      <SelectTime />
    </div>
  );
};

export default Notification;
