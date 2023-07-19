import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Game {
    id: number,
    title: string,
    year: number,
    genre: string,
    platforms: string,
    score: number,
    imgUrl: string,
    shortDescription: string,
    longDescription: string


}

export function Game() {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState<Game | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/games/${gameId}`)
      .then((res) => res.json())
      .then((data) => setGameData(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(gameData);

  return (
    <div>
      <p>{gameData?.id}</p>
      <p>{gameData?.title}</p>
      <p>{gameData?.year}</p>
      <p>{gameData?.genre}</p>
      <p>{gameData?.platforms}</p>
      <p>{gameData?.score}</p>
      <p>{gameData?.imgUrl}</p>
      <p>{gameData?.shortDescription}</p>
      <p>{gameData?.longDescription}</p>
    </div>
  );
}
