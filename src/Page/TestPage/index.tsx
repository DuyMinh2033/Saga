import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Timer from './component/Timer/Timer';

const TestPage = () => {
  const { control } = useForm({
    defaultValues: '',
  });

  const resetTimerCallback = useRef(null);
  const handBtn = () => {
    if (resetTimerCallback.current) {
      resetTimerCallback.current();
    }
  };

  return (
    <div>
      <button onClick={handBtn}>Click Me</button>
      <Controller
        control={control}
        name="timer"
        render={({ field }) => (
          <Timer
            onReset={(callback) => {
              resetTimerCallback.current = callback;
            }}
            {...field}
          />
        )}
      />
    </div>
  );
};

export default TestPage;
