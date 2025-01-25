import "./styles.scss";
import EnterEmail from "./Components/EnterEmail";
import EnterPersonalDetail from "./Components/EnterPersonalDetail";
import ThankYou from "./Components/ThankYou";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const stepValue = {
    enterEmail: "enterEmail",
    personalDetail: "personalDetail",
    thankYou: "thankYou",
  };

  const [step, setStep] = useState(stepValue.enterEmail);
  const historyStep = useRef([]);

  const navigateEnterPersonal = () => {
    setStep(stepValue.personalDetail);
  };
  const navigateThankYou = () => {
    setStep(stepValue.thankYou);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!historyStep.current.includes(step)) {
      historyStep.current.push(step);
    }
  }, [step]);

  const handleMoveBack = () => {
    console.log("current", historyStep);

    // const length = historyStep.current.length;
    // if (length <= 0) return;
    // const before = historyStep.current[length - 2] || stepValue.enterEmail;
    // // if (before === stepValue.enterEmail && stepValue.thankYou === step) {
    // //   navigate("/");
    // // }
    // setStep(before);
    // historyStep.current = historyStep.current.filter((item) => item !== step);
  };

  const page = {
    [stepValue.enterEmail]: 1,
    [stepValue.personalDetail]: 2,
    [stepValue.thankYou]: 3,
  };

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      alert("This is the development environment");
    } else if (import.meta.env.MODE === "production") {
      alert("This is the production environment");
    } else {
      alert("This is the test environment");
    }
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{`step >>>>:${page[step]}`}</p>
        {stepValue.enterEmail === step && (
          <EnterEmail
            navigatePersonal={navigateEnterPersonal}
            navigateThankYou={navigateThankYou}
          />
        )}
        {stepValue.personalDetail === step && (
          <EnterPersonalDetail
            navigateThankYou={navigateThankYou}
            onMoveBack={handleMoveBack}
          />
        )}
        {stepValue.thankYou === step && (
          <ThankYou onMoveBack={handleMoveBack} />
        )}
      </div>
    </>
  );
};

export default Demo;
