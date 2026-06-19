//// Add .env file to project root to store environment variables locally
//// Load environment variables from .env file:

// Base API URL (SportsAPI)
const BASE_URL = 'https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/16/season/58210/standings/total';

// API Key
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

// GET Matches by given date (date to pass as parameter)
export async function getStandings() {
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

    // Maps standings to keys needed for state management      
    const standings = data.standings
    .map(standing => ({
      id: standings.id,
      group: standings.name,
      rows: standings.rows
    }))

    // async function fetches API response returns only 2 to 4 events needed per day (date)
    return standings;
  }
  throw new Error(`Error fetching matches: ${response.statusText}`);
  return null
}