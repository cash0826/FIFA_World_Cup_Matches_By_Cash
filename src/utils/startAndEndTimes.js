
// Moving variable to separate utils files for later

// Convert date string (YYYY-MM-DD) to local timezone boundaries
// Adding T00:00:00 creates local midnight (start of day)
const startOfDay = new Date(`${date}T00:00:00`);
const endOfDay = new Date(`${date}T23:59:59`);

// Convert to UNIX timestamps (API uses seconds, not milliseconds)
const startTimestamp = Math.floor(startOfDay.getTime() / 1000);
const endTimestamp = Math.floor(endOfDay.getTime() / 1000);