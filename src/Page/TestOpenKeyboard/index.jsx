import useRestoreSelection from "./useKeyboard";

function KeyBoard() {
  useRestoreSelection(); // Sử dụng hook để khôi phục selection và scroll

  return (
    <div>
      <input type="text" placeholder="Type here..." />
      <textarea placeholder="Type here..." />
    </div>
  );
}

export default KeyBoard;
