/* eslint-disable react/prop-types */
const EnterEmail = ({ navigatePersonal, navigateThankYou }) => {
  const handleOnClick = () => {
    // Generate a random boolean
    const shouldNavigateToPersonal = Math.random() < 0.5;
    if (shouldNavigateToPersonal) {
      navigatePersonal();
    } else {
      navigateThankYou(); //  finally step
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <button onClick={handleOnClick}>next</button>
    </div>
  );
};

export default EnterEmail;
