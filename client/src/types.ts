export type Player = {
  nickname: string;
  scores: number;
  isAlive: boolean;
  totalKills: number;
  totalDeaths: number;
};

export type Team = {
  players: Player[];
};

export type Result = {
  winningTeam: Team,
  losingTeam: Team;
};
