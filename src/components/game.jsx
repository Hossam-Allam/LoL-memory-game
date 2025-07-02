import Card from "./card";
import { useState, useEffect } from "react";

function Game() {
  const [champion, setChampion] = useState(null);

  useEffect(() => {
    async function fetchRandomChampion() {
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

        // 3. random champion
        const keys = Object.keys(listJson.data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const champ = listJson.data[randomKey];

        // 4. splash art
        const splashUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`;

        setChampion({ name: champ.name, imageUrl: splashUrl });
      } catch (err) {
        console.error("Failed to fetch champion:", err);
      }
    }

    fetchRandomChampion();
  }, []);

  return (
    <div>
      <h1>Memory Game</h1>
      {champion ? (
        <Card name={champion.name} imageUrl={champion.imageUrl} />
      ) : (
        <p>Loading a random champion…</p>
      )}
    </div>
  );
}

export default Game;
