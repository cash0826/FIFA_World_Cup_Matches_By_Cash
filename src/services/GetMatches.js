//// Add .env file to project root to store environment variables locally
//// Load environment variables from .env file:

// Base API URL (SportsAPI)
// World Cup Unique tournament id: 16
const BASE_URL = 'https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/16/events-on-date?date=';

// API Key
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

// GET Matches by given date (date to pass as parameter)
export async function getMatches(date) {
  const url = `${BASE_URL}${date}`

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

      // Maps worldCupMatches to keys needed for state management      
      const worldCupMatches = data.events
      .map(event => ({
        id: event.id,
        homeTeam: event.homeTeam.name,
        homeTeamCode: event.homeTeam.nameCode, 
        awayTeam: event.awayTeam.name,
        awayTeamCode: event.awayTeam.nameCode,
        startTimestamp: event.startTimestamp,
        group: event.tournament.groupSign,
        status: event.status.description,
        inProgress: event.status.type,
        homeScore: event.homeScore.current,
        awayScore: event.awayScore.current,
      }))

      // async function fetches API response returns only 2 to 4 events needed per day (date)
      return worldCupMatches;
    }
    if (response.status === 404) {
      return {
        code: 404,
        message: "Match schedule unavailable: To be Announced"
      };
    }
    throw new Error(`fetching matches: ${response.statusText}`);
    return null
  }
}