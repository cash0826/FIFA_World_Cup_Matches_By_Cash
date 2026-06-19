//// Add .env file to project root to store environment variables locally
//// Load environment variables from .env file:

// Base API URL (SportsAPI)
const BASE_URL = 'https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/16/season/58210/standings/total';

// API Key
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

// GET Matches by given date (date to pass as parameter)
export async function getStandings() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": apiKey, // Uses apiKey declared above, stored in a separate .env file
      "x-rapidapi-host": "sportapi7.p.rapidapi.com"
    }
  });
  if (response.ok) {
    const data = await response.json();

    // Maps standings to keys needed for state management      
    const standings = data.standings
    .map(standing => ({
      id: standing.id,
      group: standing.name,
      rows: standing.rows.map(row => ({
        id: row.id,
        team: row.team.name,
        teamCode: row.team.nameCode,
        wins: row.wins,
        losses: row.losses,
        draws: row.draws,
        points: row.points,
        position: row.position
      })),
    }))

    // async function fetches API response returns standings object with nested row objects
    return standings;
  }
  throw new Error(`Error fetching matches: ${response.statusText}`);
  return null
}