import React from "react";

interface TooltipProps {
  totalKills: number;
  totalDeaths: number;
}

const Tooltip: React.FC<TooltipProps> = ({ totalKills, totalDeaths }) => {
  return (
    <div className="tooltip">
      <div>Total Kills: {totalKills}</div>
      <div>Total Deaths: {totalDeaths}</div>
    </div>
  );
};

export default Tooltip;
