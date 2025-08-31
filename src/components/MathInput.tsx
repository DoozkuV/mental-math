import React, { useReducer } from "react"
import { randSingleDigit } from "@lib/math";
import Timer from "@components/Timer";

type State = { lhs: number; rhs: number; resetKey: number; };
const reducer = ({ resetKey }: State): State => ({
  lhs: randSingleDigit(),
  rhs: randSingleDigit(),
  resetKey: resetKey + 1
})

function MathInput() {
  const [{ lhs, rhs, resetKey }, dispatch] = useReducer(reducer, {
    lhs: randSingleDigit(),
    rhs: randSingleDigit(),
    resetKey: 0,
  });

  const sum = lhs + rhs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val != sum) return;

    e.target.value = "";
    dispatch();
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
