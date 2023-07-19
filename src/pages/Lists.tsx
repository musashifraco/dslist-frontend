import { useEffect, useState } from "react";

interface Lists {
    id: number,
    name: string
}

export function Lists() {
  const [lists, setLists] = useState<Lists[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/lists`)
      .then((res) => res.json())
      .then((data) => setLists(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(lists);

  return (
    <div>
      {lists?.map(element =>(<p>{element.name}</p>) )}
    </div>
  );
}
