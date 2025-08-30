import { useState } from "react"
import { randSingleDigit } from "@lib/math";

function MathInput() {
  const [lhs, setLhs] = useState(randSingleDigit());
  const [rhs, setRhs] = useState(randSingleDigit());

  const sum = lhs + rhs;

  return (
    <>
      <div>{lhs} + {rhs} = ?</div>
      <input type="number" onChange={(e) => {
        const val = parseInt(e.target.value);
        if (val == sum) {
          e.target.value = "";
          setLhs(randSingleDigit());
          setRhs(randSingleDigit());
        }
      }} />
    </>
  );
}

export default MathInput;
