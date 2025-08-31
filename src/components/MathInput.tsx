import React, { useReducer, useRef } from "react";
import Timer from "@components/Timer";
import { randSingleDigit } from "@lib/math";
import { createPing } from "@/lib/animation";

type State = { lhs: number; rhs: number; numSolved: number };
const reducer = ({ numSolved }: State): State => ({
  lhs: randSingleDigit(),
  rhs: randSingleDigit(),
  numSolved: numSolved + 1,
});

function MathInput() {
  const [{ lhs, rhs, numSolved }, dispatch] = useReducer(reducer, {
    lhs: randSingleDigit(),
    rhs: randSingleDigit(),
    numSolved: 0,
  });

  const sum = lhs + rhs;
  const containerRef = useRef<HTMLDivElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val !== sum) return;

    e.target.value = "";
    dispatch();
    if (containerRef.current) { createPing(containerRef.current); }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-4/5 md:w-1/2"
    >
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-10 gap-10 w-full">
        <div className="text-6xl md:text-8xl font-extrabold text-center text-indigo-700 drop-shadow-lg">
          {lhs} + {rhs} = ?
        </div>

        <input
          type="number"
          onChange={onChange}
          className="w-40 md:w-56 h-20 text-center text-4xl font-bold border-4 border-indigo-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition"
          placeholder="?"
        />

        <div className="flex items-center justify-center gap-6 text-lg font-bold text-gray-700">
          <Timer key={numSolved} />
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">🏆</span>
            <span className="text-indigo-700">{numSolved}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathInput;
