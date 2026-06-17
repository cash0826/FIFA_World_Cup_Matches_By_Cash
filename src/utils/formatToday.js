
// Format today's date to local time instead of UTC date
// Why? Simply using new Date can return next day if it's already late
export function formatToday(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

