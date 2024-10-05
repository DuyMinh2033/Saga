import { useState } from "react";
import SelectFrequencyBottom from "../../common/components/SelectFrequecyBottom";
import FrequencyCty from "../../common/components/FrequencyCty/FrequencyCty";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div>
      <SelectFrequencyBottom open={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)}>Select One</button>
      <FrequencyCty open={isOpen2} onClose={() => setIsOpen2(false)} />
      <button onClick={() => setIsOpen2(true)}>Select Two</button>
    </div>
  );
};

export default Notification;
