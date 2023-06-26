const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const winningTeam = {
  players: Array.from({ length: 50 }, (_, index) => ({
    nickname: `Player ${index + 1}`,
    scores: Math.floor(Math.random() * 100),
    isAlive: true,
    totalKills: Math.floor(Math.random() * 20),
    totalDeaths: Math.floor(Math.random() * 10),
  })),
};

const loserTeam = {
  players: Array.from({ length: 50 }, (_, index) => ({
    nickname: `Player ${index + 51}`,
    scores: Math.floor(Math.random() * 100),
    isAlive: false,
    totalKills: Math.floor(Math.random() * 20),
    totalDeaths: Math.floor(Math.random() * 10),
  })),
};

const friendRequests = [];

app.get("/api/battle/result", (req, res) => {
  res.json({ winningTeam, loserTeam });
});

app.post("/api/players/friend-requests", (req, res) => {
  try {
    const {
      body: { player },
    } = req;

    const isPlayerExists =
      winningTeam.players.some((item) => item.id === player.id) ||
      loserTeam.players.some((item) => item.id === player.id);

    if (!isPlayerExists) {
      res.status(404).send("Player not found");
      return;
    }

    friendRequests.push(player);

    res.send("Ok");
  } catch (error) {
    res
    .status(500)
    .send("Something went wrong");
  }
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
