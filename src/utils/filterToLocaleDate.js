
// function to return matches from API response, filtered by matches that occur on that date

export function filterToLocaleDate(matches, date) {
  const matchesForDate = matches.filter(match => {
    const matchDate = new Date(match.startTimestamp * 1000)
    return(
      matchDate.toDateString() === date.toDateString()
    );
  });  

  return matchesForDate
}
