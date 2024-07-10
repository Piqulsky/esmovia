import { useState } from "react";
import "./session-one.css";
import { ButtonDataCall } from "./components/button-data-call/button-data-call";
import { Counter } from "./components/common/counter/counter";
import { FetchPokemon } from "./components/fetch-pokemon/fetch-pokemon";
import { bringData } from "./services/api-calls";

function SessionOne() {
  const [dataApi, setDataApi] = useState([]);

  const takeData = (value) => {
    bringData(value)
      .then((res) => {
        setDataApi(res.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ButtonDataCall criteria="character" emitFunction={takeData} />
      <ButtonDataCall criteria="location" emitFunction={takeData} />
      <ButtonDataCall criteria="episode" emitFunction={takeData} />
      {dataApi.length > 0 && (
        <>
          {dataApi.map((element) => {
            return <div key={element.id}>{element.name}</div>;
          })}
        </>
      )}
      <FetchPokemon criteria="pikachu" />
      <FetchPokemon criteria="1" />
      <Counter incrementBy={1} />
      <Counter incrementBy={5} />
      <Counter incrementBy={15} />
    </>
  );
}

export default SessionOne;
