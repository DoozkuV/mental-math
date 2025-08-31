import React, { useEffect, useReducer, useRef } from "react";
import Timer from "@components/Timer";
import { usePing } from "@hooks/usePing";

export interface MathInputProps {
  operandFunc: () => { lhs: number, rhs: number },
  operator: "add" | "subtract" | "multiply" | "divide";
}

type State = { lhs: number; rhs: number; numSolved: number };

const MathInput: React.FC<MathInputProps> = ({ operandFunc, operator }) => {
  const { pings, triggerPing } = usePing();

  const reducer = ({ numSolved }: State): State => ({
    numSolved: numSolved + 1,
    ...operandFunc()
  });
  const [{ lhs, rhs, numSolved }, dispatch] = useReducer(reducer, {
    numSolved: 0,
    ...operandFunc(),
  });

  const operators = {
    add: { fn: (a: number, b: number) => a + b, symbol: '+' },
    subtract: { fn: (a: number, b: number) => a - b, symbol: '-' },
    multiply: { fn: (a: number, b: number) => a * b, symbol: 'x' },
    divide: { fn: (a: number, b: number) => a / b, symbol: '÷' },
  };

  const { fn, symbol } = operators[operator];
  const res = fn(lhs, rhs);

  const inputRef = useRef<HTMLInputElement>(null);
  // Auto-focus input on load
  useEffect(() => inputRef.current?.focus(), []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val !== res) return;

    e.target.value = "";
    dispatch();
    triggerPing();
  };

  return (
    <div
      className="relative flex items-center justify-center w-4/5 md:w-full"
    >
      {/* Ping Animation */}
      {pings.map(p => (
        <div
          key={p}
          className="absolute inset-0 rounded-xl bg-green-400/40 animate-ping-once pointer-events-none"
        />
      ))}
      {/* Main Game Screen */}
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
    </div >
  );
}

export default MathInput;
