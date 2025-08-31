import React, { useEffect, useReducer, useRef } from "react";
import Timer from "@components/Timer";
import { createPing } from "@/lib/animation";

export interface MathInputProps {
  lhs: number | (() => number);
  rhs: number | (() => number);
  operator: "add" | "subtract" | "multiply";
}

type State = { lhs: number; rhs: number; numSolved: number };

const MathInput: React.FC<MathInputProps> = ({ lhs: lhsInit, rhs: rhsInit, operator }) => {
  const reducer = ({ numSolved }: State): State => ({
    lhs: typeof lhsInit == "function" ? lhsInit() : lhsInit,
    rhs: typeof rhsInit == "function" ? rhsInit() : rhsInit,
    numSolved: numSolved + 1,
  });

  const [{ lhs, rhs, numSolved }, dispatch] = useReducer(reducer, {
    lhs: typeof lhsInit == "function" ? lhsInit() : lhsInit,
    rhs: typeof rhsInit == "function" ? rhsInit() : rhsInit,
    numSolved: 0,
  });

  let sum: number;
  let symbol: string;
  switch (operator) {
    case "add":
      sum = lhs + rhs
      symbol = "+";
      break;
    case "subtract":
      sum = lhs - rhs
      symbol = "-";
      break;
    case "multiply":
      sum = lhs * rhs
      symbol = "x";
      break;
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on load
  useEffect(() => inputRef.current?.focus(), []);

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
      className="relative flex items-center justify-center w-4/5 md:w-full"
    >
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-10 gap-10 w-full">
        <div className="text-6xl md:text-8xl font-extrabold text-center text-indigo-700 drop-shadow-lg">
          {lhs} {symbol} {rhs} = ?
        </div>

        <input
          type="number"
          ref={inputRef}
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
