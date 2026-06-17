
// Format TimeStamp to legible local time
export function formatTimeStamp(timeStamp) {
  return new Date(timeStamp * 1000)
    .toLocaleTimeString("en-US", {
      // hourCycle: "h23",
      hour: "numeric",
      minute: "2-digit"
    });
}

// use h23 hourCycle for 24 hour time that starts midnight at 00:00 and ends day at 23:59:59