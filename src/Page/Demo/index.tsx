/* eslint-disable prettier/prettier */
// file: Demo.tsx
import { useState } from 'react';
import './styles.scss';

const TOTAL_STEPS = 4;
const TOTAL_SEGMENTS = 8;

const stepsScreens = {
  step1: 'step1',
  step2: 'step2',
  step3: 'step3',
  step4: 'step4',
};

const stepsArray = Object.values(stepsScreens); // ['step1', 'step2', ...]

const Demo = () => {
  const [step, setStep] = useState(stepsScreens.step1);

  const currentIndex = stepsArray.indexOf(step);
  const percent = ((currentIndex + 1) / TOTAL_STEPS) * 100;

  const nextStep = () => {
    if (currentIndex < stepsArray.length - 1) {
      setStep(stepsArray[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setStep(stepsArray[currentIndex - 1]);
    }
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = './pdf-test.pdf';
    link.download = 'helloWorld.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 mt-20">
      <div className="process-wrapper">
        <div
          className="bg-blue-500 h-full transition-all duration-300 relative z-10"
          style={{ width: `${percent}%` }}
        />
        <div className="segment-lines">
          {Array.from({ length: TOTAL_SEGMENTS + 1 }).map((_, idx) => (
            <div key={idx} className="segment-item" />
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Step {currentIndex + 1} of {TOTAL_STEPS} ({Math.round(percent)}%)
      </div>

      <div className="mt-4 space-x-2">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Prev Step
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={currentIndex === stepsArray.length - 1}
        >
          Next Step
        </button>
        <button onClick={downloadFile}>download file</button>
      </div>
    </div>
  );
};

export default Demo;
