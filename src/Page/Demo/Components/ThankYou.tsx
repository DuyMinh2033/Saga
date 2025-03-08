const ThankYou = ({ onMoveBack }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
      <button onClick={onMoveBack}>Back</button>
    </div>
  );
};

export default ThankYou;
