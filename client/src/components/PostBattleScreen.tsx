import React from "react";
import Player from "./Player";
import { Team } from "../types";

type PostBattleScreenProps = {
  winningTeam: Team;
  losingTeam: Team;
};

const PostBattleScreen: React.FC<PostBattleScreenProps> = ({
  winningTeam,
  losingTeam,
}) => {
  return (
    <div className="post-battle-container">
      <h1>Post-Battle Screen</h1>
      <div className="teams-wrapper">
        <div className="team">
          <h2>Winning Team</h2>
          {winningTeam.players.map((player, index) => (
            <Player key={index} player={player} />
          ))}
        </div>
        <div className="team">
          <h2>Losing Team</h2>
          {losingTeam.players.map((player, index) => (
            <Player key={index} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostBattleScreen;
