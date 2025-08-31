import { useCallback, useState } from "react";

export function usePing() {
  const [pings, setPings] = useState<string[]>([]);

  const triggerPing = useCallback(() => {
    const id = crypto.randomUUID();
    setPings((prev) => [...prev, id]);
    setTimeout(() => {
      setPings((prev) => prev.filter(p => p !== id));
    }, 1000);
  }, []);

  return { pings, triggerPing };
}
