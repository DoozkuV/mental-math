import { useEffect, useState } from "react";

function Timer({ resetSignal }: { resetSignal: number }) {
  const [seconds, setSeconds] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(Date.now);


  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);

    if (resetSignal > 0) {
      setTimes((prev) => [...prev, Date.now() - startTime])
      setSeconds(0);
      setStartTime(Date.now);
    }

    return () => clearInterval(id);
  }, [resetSignal]);

  const averageTime = times.length > 0
    ? times.reduce((acc, i) => acc + i) / (times.length * 1000)
    : 0;

  return (
    <div className="flex flex-col items-center text-gray-700 font-bold text-lg">
      <span>
        ⏱ <span className="text-indigo-600">{seconds}s</span>
      </span>
      <span>
        📊 <span className="text-green-600">{averageTime.toPrecision(2)}s avg</span>
      </span>
    </div>);
}

export default Timer;
