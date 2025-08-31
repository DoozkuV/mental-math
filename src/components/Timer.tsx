import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="text-lg font-bold text-gray-700">
      ⏱ <span className="text-indigo-600">{seconds}s</span>
    </div>
  );
}

export default Timer;
