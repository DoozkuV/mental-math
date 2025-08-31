import React, { useReducer } from "react";
import Timer from "@components/Timer";
import { usePing } from "@hooks/usePing";

export interface MathEquationProps<T extends number[]> {
  operandFunc: () => T;
  solutionFunc: (...operands: T) => number;
  children: (...operands: T) => React.ReactNode;
}

type State<T extends number[]> = { operands: T; numSolved: number };

function MathEquation<T extends number[]>({
  operandFunc,
  solutionFunc,
  children: equationFormat
}: MathEquationProps<T>) {
  const { pings, triggerPing } = usePing();

  const reducer = ({ numSolved }: State<T>): State<T> => ({
    numSolved: numSolved + 1,
    operands: operandFunc()
  });
  const [{ operands, numSolved }, dispatch] = useReducer(reducer, {
    numSolved: 0,
    operands: operandFunc(),
  });

  const solution = solutionFunc(...operands);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val !== solution) return;

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
          {equationFormat(...operands)}
        </div>

        <input
          type="number"
          onChange={onChange}
          autoFocus
          className="w-40 md:w-56 h-20 text-center text-4xl font-bold border-4 border-indigo-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition"
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

export default MathEquation;
