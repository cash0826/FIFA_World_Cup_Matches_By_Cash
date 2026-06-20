
// Format Display Date
export function formatDisplayDate(dateString) {

  // Adding T00:00:00 creates a local midnight date and avoid timezone differences from UTC
  return new Date(`${dateString}T00:00:00`)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
}
