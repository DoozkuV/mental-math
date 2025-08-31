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
    <div className="flex flex-col items-center justify-center w-4/5 md:w-1/2 bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-10 gap-10">
      <div className="text-6xl md:text-8xl font-extrabold text-center text-indigo-700 drop-shadow-lg">
        {lhs} + {rhs} = ?
      </div>

      <input
        type="number"
        onChange={onChange}
        className="w-40 md:w-56 h-20 text-center text-4xl font-bold border-4 border-indigo-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition"
        placeholder="?"
      />

      <Timer key={resetKey} />
    </div>);
}

export default MathInput;
