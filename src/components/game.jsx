import { useState, useEffect } from "react";
import Card from "./card";
import { shuffleArray } from "./utils";

export default function Game() {
  const [champions, setChampions] = useState([]);
  const [streak, setStreak] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    async function fetchChampions() {
      try {
        // 1. get latest version
        const versionsRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions = await versionsRes.json();
        const latest = versions[0];

        // 2. fetch champion list
        const listRes = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latest}/data/en_US/champion.json`
        );
        const listJson = await listRes.json();

        // 3. pick 10 unique random champions
        const keys = Object.keys(listJson.data);
        const randomKeys = shuffleArray(keys).slice(0, 10);

        // 4. build champion objects
        const champs = randomKeys.map((key) => {
          const champ = listJson.data[key];
          return {
            id: champ.id,
            name: champ.name,
            imageUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`,
          };
        });

        setChampions(champs);
      } catch (err) {
        console.error("Failed to fetch champions:", err);
      }
    }

    fetchChampions();
  }, [attempts]);

  const handleCardClick = (champ) => {
    if (!clicked.includes(champ.id)) {
      setClicked((prev) => [...prev, champ.id]);
      setStreak((prev) => prev + 1);
      console.log(champ.id, champ.name, "clicked", streak + 1);
      setChampions((prev) => shuffleArray(prev));
    } else {
      setStreak(0);
      setAttempts((prev) => prev + 1);
      console.log(champ.id, champ.name, "im in the else", streak + 1);
      setClicked([]);
    }
  };

  if (champions.length === 0) {
    return <p>Loading champions…</p>;
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Current Streak: {streak}</p>
      <p>Attempts: {attempts}</p>
      <div className="card-grid">
        {champions.map((champ) => (
          <Card
            key={champ.id}
            name={champ.name}
            imageUrl={champ.imageUrl}
            onClick={() => handleCardClick(champ)}
          />
        ))}
      </div>
    </div>
  );
}
