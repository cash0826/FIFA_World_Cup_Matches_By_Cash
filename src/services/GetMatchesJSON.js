
// Retrieves json response sample from the SportsAPI response. 
// To be used for now. GetMatches will be used for live, external API results.

const baseURL = 'http://localhost:3001';

// GET Matches from response.json
export async function getMatches() {
  const url = `${baseURL}/events`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();

    const startOfDay = new Date(`2026-06-13T00:00:00`);
    const endOfDay = new Date(`2026-06-13T23:59:59`);
    
    // Convert to UNIX timestamps (API uses seconds, not milliseconds)
    const startTimestamp = Math.floor(startOfDay.getTime() / 1000);
    const endTimestamp = Math.floor(endOfDay.getTime() / 1000);

    const worldCupMatches = data.filter(
      event => event.tournament?.uniqueTournament?.id === 16 &&
                event.startTimestamp >= startTimestamp &&
                event.startTimestamp <= endTimestamp
    )
    .map((event) =>({
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

