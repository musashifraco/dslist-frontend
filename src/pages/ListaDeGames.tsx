/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface Game {
  id: number;
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
  postion: number;
}

export function ListaDeGames() {
  const [list, setList] = useState<Game[]>([]);
  list.sort((a, b) => a.postion - b.postion);
  const [itemList, setItemList] = useState(list);
  const { listId } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`http://localhost:8080/lists/${listId}/games`)
      .then((res) => res.json())
      .then((data: Game[]) => setList(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setItemList(list);
  }, [list]);

  const handleDrop = (droppedItem: DropResult) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!droppedItem.destination) return;

    const data = {
      // eslint-disable-next-line
      sourceIndex: droppedItem.source.index,
      // eslint-disable-next-line
      destinationIndex: droppedItem.destination.index,
    };

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = fetch(`http://localhost:8080/lists/${listId}/replacement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    //  VERIFICANDO SE O REQUEST ESTA OK
    // console.log(response);

    const updatedList = [...itemList];
    // eslint-disable-next-line
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // eslint-disable-next-line 
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setItemList(updatedList);
  };

  // VERIFICANDO SE OS ESTADOS ESTAO OK
  // console.log(list);
  // console.log("_______________________");
  // console.log(itemList);

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              // eslint-disable-next-line 
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="item-container"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // eslint-disable-next-line
                      ref={provided.innerRef}
                    >
                      {item.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
