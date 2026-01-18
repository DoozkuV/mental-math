import { useState } from "react";

export function usePing() {
  const [pings, setPings] = useState<number[]>([]);

  const triggerPing = () => {
    const id = Date.now();
    setPings((prev) => [...prev, id]);
    setTimeout(() => {
      setPings((prev) => prev.filter(p => p !== id));
    }, 1000);
  };

  return { pings, triggerPing };
}
