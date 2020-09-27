import playerRankings from './playerRankings.json';

const men = playerRankings.rankings[1].player_rankings;
const women = playerRankings.rankings[0].player_rankings;
const mix = [...men, ...women]

export default mix;