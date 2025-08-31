export function createPing(container: HTMLDivElement) {
  const ping = document.createElement("div");
  ping.className =
    "absolute inset-0 rounded-xl bg-green-400/40 animate-ping-once pointer-events-none";
  container.appendChild(ping);

  ping.addEventListener("animationend", () => {
    ping.remove();
  });
}
