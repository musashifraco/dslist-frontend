import { NavLink } from "react-router-dom";
import { List, ListContainer } from "./Main.styles";
import { useEffect, useState } from "react";

interface Lists {
  id: number;
  name: string;
}

export function Main() {
  const [lists, setLists] = useState<Lists[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/lists`)
      .then((res) => res.json())
      .then((data) => setLists(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(lists);
  return (
    <ListContainer>
      <div>
        <h2>Minhas Coleções</h2>
        <List>
          {lists?.map((element) => (
            <NavLink to={`/lists/${element.id}/games`} title="StartButtom">
              <p key={element.id}>{element.name}</p>
            </NavLink>
          ))}
        </List>
      </div>
    </ListContainer>
  );
}
