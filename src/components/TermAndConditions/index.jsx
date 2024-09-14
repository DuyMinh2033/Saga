/* eslint-disable react/prop-types */
import { useState } from "react";
import { arrTerm } from "../../contanst.js/arrTerm";
import ListCheck from "../ListCheck";

const TermAndCondition = ({ onSubmit }) => {
  const [checked, setChecked] = useState([]);

  return (
    <div>
      <ListCheck config={arrTerm} setChecked={setChecked} checked={checked} />
      <button
        onClick={onSubmit}
        disabled={arrTerm.options.length !== checked.length}
      >
        Submit
      </button>
    </div>
  );
};

export default TermAndCondition;
