
// Retrieves json response sample from the SportsAPI response. 
// To be used for now. GetMatches will be used for live, external API results.

const baseURL = 'http://localhost:3001';

// GET Matches from response.json
export async function getMatches() {
  const url = `${baseURL}/events`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();

    const worldCupMatches = data.map((event) =>({
      id: event.id,
      homeTeam: event.homeTeam.name,
      awayTeam: event.awayTeam.name,
      startTimestamp: event.startTimestamp,
      group: event.tournament.groupName,
      round: event.roundInfo.round
    }))

    return worldCupMatches;
  }
  throw new Error(`Error fetching events: ${response.statusText}`);
  return [];
}

