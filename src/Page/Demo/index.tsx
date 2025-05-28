/* eslint-disable prettier/prettier */
import { useState } from 'react';
import './styles.scss';
const TOTAL_STEPS = 10;
const TOTAL_SEGMENTS = 8;

const Demo = () => {
  const [step, setStep] = useState(0);
  const percent = ((step + 1) / TOTAL_STEPS) * 100;

  const nextStep = () => {
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
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
        Step {step + 1} of {TOTAL_STEPS} ({Math.round(percent)}%)
      </div>
      <div className="mt-4 space-x-2">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={step === 0}
        >
          Prev Step
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={step === TOTAL_STEPS - 1}
        >
          Next Step
        </button>
        <button onClick={downloadFile}>download file</button>
      </div>
    </div>
  );
};

export default Demo;
