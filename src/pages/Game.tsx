import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameContainer } from "./Game.styles";
import sekiroImage from "../../public/images/sekiro.jpg"
import starImage from "../..//public/images/starImage.svg" 
import starImageYellow from "../..//public/images/starImageYellow.svg" 

interface Game {
  id: number;
  title: string;
  year: number;
  genre: string;
  platforms: string;
  score: number;
  imgUrl: string;
  shortDescription: string;
  longDescription: string;
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
    <GameContainer>
      <div>
      <div className="gameDetailsContainer">
        <img src={gameData?.imgUrl} alt="" />
        <div className="details">
          <span>{gameData?.year}</span>
          <h2>{gameData?.title}</h2>
          <p><strong>Genre</strong>: {gameData?.genre}</p>
          <p><strong>Platforms</strong>: {gameData?.platforms}</p>
          <div className="starsContainer">
          {(gameData?.score ?? 0) > 0 ? (<img src={starImageYellow} />) : (<img src={starImage} />)}
          {(gameData?.score ?? 0) > 1 ? (<img src={starImageYellow} />) : (<img src={starImage} />)}
          {(gameData?.score ?? 0) > 2 ? (<img src={starImageYellow} />) : (<img src={starImage} />)}
          {(gameData?.score ?? 0) > 3 ? (<img src={starImageYellow} />) : (<img src={starImage} />)}
          {(gameData?.score ?? 0) > 4 ? (<img src={starImageYellow} />) : (<img src={starImage} />)}
          </div>
        </div>
      </div>
      <p>{gameData?.longDescription}</p>
      </div>
    </GameContainer>
  );
}
