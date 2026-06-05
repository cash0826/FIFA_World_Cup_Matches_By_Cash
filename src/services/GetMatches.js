
//// Dotenv for API Key:
//// Install dotenv package: `npm install dotenv`
//// add .env file to project root to store environment variables locally
//// Load environment variables from .env file
import 'dotenv/config.js'

// Base API URL
const baseURL = 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/scheduled-events';

// API Key
const apiKey = process.env.RAPIDAPI_KEY;
console.log(apiKey)

// Date Handling:
// new Date() provides today's date
// let example = new Date()
// console.log(example)

// 'Today' with YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];
console.log(today)

// GET Matches by given date
export async function getMatches(date) {
  const url = `${baseURL}/${date}`

  if (date) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "sportapi7.p.rapidapi.com"
      }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(`Error fetching matches: ${response.statusText}`);
    return null
  }
  
  else {
    console.log('Missing Date')
  }
}