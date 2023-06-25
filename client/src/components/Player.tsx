import React, { useState } from "react";
import { Player as PlayerType } from "../types";
import Tooltip from "./Tooltip";

type PlayerProps = {
  player: PlayerType;
};

const Player: React.FC<PlayerProps> = ({ player }) => {
  const { nickname, scores, isAlive, totalKills, totalDeaths } = player;

  const [friendRequestSent, setFriendRequestSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFriendRequest = async () => {
    try {
      setLoading(true);
      const request = new Request(
        "http://localhost:8000/api/players/friend-requests",
        {
          method: "POST",
          body: JSON.stringify({ player }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await fetch(request);
      setFriendRequestSent(true);
    } catch (error) {
      console.error(`Friend request not sent due to error ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`player ${isAlive ? "alive" : "dead"}`}>
      <div className="player-info">
        <span className="nickname">{nickname}</span>
        <span className="scores">Score: {scores}</span>
      </div>
      <Tooltip totalKills={totalKills} totalDeaths={totalDeaths} />
      {!friendRequestSent && (
        <button
          className="friend-request"
          onClick={handleFriendRequest}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            fill="black"
            width="24px"
            height="24px"
          >
            <g>
              <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path d="M3801.7,4983.2c-722.8-161.8-1294.4-706.1-1544.5-1473c-79.8-248-115.6-487.5-115.6-788c0-674.5,233.2-1262.9,682.9-1714.7C3400.4,423.4,4198.9,272.1,4928,608.3c756.5,350.9,1248.2,1180.9,1248.2,2113.9c0,1115.8-712.4,2076.1-1676.9,2261C4314.4,5018.9,3961.4,5018.9,3801.7,4983.2z" />
                <path d="M1937.9-270.1C1381-570.6,868.3-862.6,796.9-919.4c-149.2-117.7-317.3-336.2-378.2-498c-56.7-145-75.6-392.9-44.1-552.6c81.9-390.8,411.9-718.7,798.5-792.2c71.4-12.6,878.4-21,2231.6-21c1933.2,0,2120.2,2.1,2120.2,33.6c0,69.3,130.3,304.7,231.1,416.1c220.6,239.5,426.6,329.9,798.5,346.7l262.7,12.6l12.6,262.7c16.8,378.2,107.2,580,359.3,806.9c111.4,100.9,121.9,117.7,86.1,134.5c-296.3,153.4-851,453.9-1336.4,722.9l-605.2,336.2l-184.9-84.1c-664-308.9-1384.8-304.7-2013.1,14.7c-71.4,35.7-142.9,65.1-157.6,63C2963.3,280.5,2494.7,32.5,1937.9-270.1z" />
                <path d="M7651.4-1366.9c-111.4-54.7-176.5-124-248-260.6c-33.6-63-39.9-134.5-46.2-477l-8.4-405.6h-359.3c-401.4,0-470.7-12.6-615.7-111.4c-254.3-170.2-296.3-546.3-88.3-781.7c142.9-163.9,201.7-178.6,664-178.6H7353v-363.5c0-424.5,23.1-537.9,140.8-668.2c119.8-132.4,220.6-176.5,405.6-176.5c182.8,0,287.9,46.2,395,168.1c124,138.7,134.5,193.3,147.1,636.7l8.4,403.4h392.9c346.7,0,401.3,6.3,485.4,44.1c182.8,82,287.9,231.1,308.9,430.8c16.8,153.4-25.2,283.7-126.1,399.3c-151.3,172.3-197.5,187-657.7,193.3l-403.4,8.4l-8.4,390.8c-10.5,441.3-25.2,502.2-159.7,643c-109.3,113.5-216.4,159.7-384.5,159.7C7792.1-1312.3,7735.4-1324.9,7651.4-1366.9z" />
              </g>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Player;
