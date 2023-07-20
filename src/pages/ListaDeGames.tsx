import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { GameCard, GameListContainer } from "./ListaDeGames.styles";
import sekiroImage from "../../public/images/sekiro.jpg";

interface Game {
  id: number;
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
  postion: number;
}

interface Lists {
  id: number;
  name: string;
}

export function ListaDeGames() {
  const [lists, setLists] = useState<Lists>({
    id: 0,
    name: "",
  });
  const [gamesByList, setGamesByList] = useState<Game[]>([]);
  gamesByList.sort((a, b) => a.postion - b.postion);
  const [gamesBySortedList, setGamesBySortedList] = useState(gamesByList);
  const { listId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/lists/${listId}/games`)
      .then((res) => res.json())
      .then((data: Game[]) => setGamesByList(data))
      .catch((err) => console.error(err));
  }, [listId]);

  useEffect(() => {
    fetch(`http://localhost:8080/lists/${listId}`)
      .then((res) => res.json())
      .then((data: Lists) => setLists(data))
      .catch((err) => console.error(err));
  }, [listId]);

  useEffect(() => {
    setGamesBySortedList(gamesByList);
  }, [gamesByList]);

  const handleDrop = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return;

    const data = {
      sourceIndex: droppedItem.source.index,
      destinationIndex: droppedItem.destination.index,
    };

    const response = fetch(
      `http://localhost:8080/lists/${listId}/replacement`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    //  REQUEST OK?
    // console.log(response);

    const updatedList = [...gamesBySortedList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setGamesBySortedList(updatedList);
  };

  // STATE OK?
  // console.log(gamesByList);
  // console.log("_______________________");
  // console.log(gamesBySortedList);

  return (
    <GameListContainer>
      <div>
        <h2>{lists?.name}</h2>
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => (
              <div
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {gamesBySortedList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <a
                        href={`http://localhost:5173/lists/${listId}/games/${item.id}`}
                      >
                        {" "}
                        <GameCard
                          className="item-container"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img src={sekiroImage} alt="" />
                          <div>
                            <h3>{item.title}</h3>
                            <p>{item.shortDescription}</p>
                            <span>{item.year}</span>
                          </div>
                        </GameCard>
                      </a>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </GameListContainer>
  );
}
