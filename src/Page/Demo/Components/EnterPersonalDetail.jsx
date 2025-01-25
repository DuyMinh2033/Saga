/* eslint-disable react/prop-types */
const EnterPersonalDetail = ({ navigateThankYou, onMoveBack }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <button onClick={onMoveBack}>Back</button>
      <button onClick={() => navigateThankYou()}>Next</button>
    </div>
  );
};

export default EnterPersonalDetail;
