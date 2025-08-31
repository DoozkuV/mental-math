import React, { useState } from "react"
import { randSingleDigit } from "@lib/math";
import Timer from "@components/Timer";

function MathInput() {
  const [lhs, setLhs] = useState(randSingleDigit());
  const [rhs, setRhs] = useState(randSingleDigit());
  const [resetKey, setResetKey] = useState(0);

  const sum = lhs + rhs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val == sum) {
      e.target.value = "";
      [setLhs, setRhs].forEach(f => f(randSingleDigit()));
      setResetKey(k => k + 1);
    }
  }

  return (
    <>
      <div>{lhs} + {rhs} = ?</div>
      <input type="number" onChange={onChange} />
      <Timer key={resetKey} />
    </>
  );
}

export default MathInput;
