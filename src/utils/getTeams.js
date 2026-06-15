import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const teamsData = JSON.parse(readFileSync(join(__dirname, '../../apiTeams.json'), 'utf-8'));

export const getTeamNames = () => {
  try {
    return teamsData.teams.map(team => team.name);
  } catch (error) {
    console.error('Error getting team names:', error);
    return [];
  }
};

// Alternative: If you're using the data elsewhere and want all team data
export const getTeams = () => {
  try {
    return teamsData.teams;
  } catch (error) {
    console.error('Error getting teams:', error);
    return [];
  }
};

const names = await getTeamNames();
console.log(names);