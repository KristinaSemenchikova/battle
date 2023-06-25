import React, { useEffect, useState } from "react";
import PostBattleScreen from "./components/PostBattleScreen";
import { Result } from "./types";
import "./styles.css";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/battle/result");
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching result:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {!loading && result && (
        <PostBattleScreen
          winningTeam={result.winningTeam}
          losingTeam={result.losingTeam}
        />
      )}
    </div>
  );
}

export default App;
