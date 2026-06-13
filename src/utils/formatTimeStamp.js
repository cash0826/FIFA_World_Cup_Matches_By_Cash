
// Format TimeStamp to legible local time
export function formatTimeStamp(timeStamp) {
  return new Date(timeStamp * 1000)
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
}