//// Added .env file to project root to store environment variables locally
//// Loaded environment variables from .env file:

// Base API URL (SportsAPI)
const baseURL = 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/scheduled-events';

// API Key
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

// Date Handling:
// new Date() provides today's date
// let example = new Date()
// console.log(example)

// 'Today' with YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// GET Matches by given date (date to pass as parameter)
export async function getMatches(date) {
  const url = `${baseURL}/${date}`

  // Only run if a formatted date is provided
  if (date) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": apiKey, // Uses apiKey declared above, stored in a separate .env file
        "x-rapidapi-host": "sportapi7.p.rapidapi.com"
      }
    });
    if (response.ok) {
      const data = await response.json();

      // Filter response by events that match FIFA World Cup (In SportsAPI, the matching key is id 16)
      // Maps worldCupMatches to keys needed for state management      
      const worldCupMatches = data.events.filter(
        event => event.tournament?.uniqueTournament?.id === 16
      )
      .map(event => ({
        id: event.id,
        homeTeam: event.homeTeam.name,
        awayTeam: event.awayTeam.name,
        startTimestamp: event.startTimestamp,
        group: event.tournament.groupName,
        round: event.roundInfo.round
      }))

      // async function fetches API response returns only 2 to 4 events needed per day (date)
      return worldCupMatches;
    }
    throw new Error(`Error fetching matches: ${response.statusText}`);
    return null
  }
}