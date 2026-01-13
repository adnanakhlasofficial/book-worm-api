export function formatTime(seconds: number) {
  seconds = Math.floor(seconds);

  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let output = "";

  if (days > 0) {
    output += `${days} day${days > 1 ? "s" : ""}, `;
  }
  if (hours > 0) {
    output += `${hours} hour${hours > 1 ? "s" : ""}, `;
  }
  if (minutes > 0) {
    output += `${minutes} minute${minutes > 1 ? "s" : ""}, `;
  }
  output += `${seconds} second${seconds !== 1 ? "s" : ""}`;

  return output;
}
