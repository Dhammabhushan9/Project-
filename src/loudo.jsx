import { useState } from "react";

function Ludo() {
  const [move, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  const[update,setUpdate]= useState(["not move"]);


  function incerblue() {
    setMove((prevMove) => {
      return { ...prevMove, blue: prevMove.blue + 1 };
    });
    update.push("blue is move");
    setUpdate(update);
  }

  function incergreen() {
    setMove((prevMove) => {
      return { ...prevMove, green: prevMove.green + 1 };
    });
  }

  function incered() {
    setMove((prevMove) => {
      return { ...prevMove, red: prevMove.red + 1 };
    });
  }

  function inceryellow() {
    setMove((prevMove) => {
      return { ...prevMove, yellow: prevMove.yellow + 1 };
    });
  }

  return (
    <>
            <div>
                <h1>Game start!!!</h1>
                <p>{update}</p>
            </div>
      <div>
        <p>Blue move: {move.blue}</p>
        <button onClick={incerblue} style={{ backgroundColor: "blue", color: "white" }}>+1</button>
      </div>

      <div>
        <p>Red move: {move.red}</p>
        <button onClick={incered} style={{ backgroundColor: "red", color: "white", color:"black" }}>+1</button>
      </div>

      <div>
        <p>Yellow move: {move.yellow}</p>
        <button onClick={inceryellow} style={{ backgroundColor: "yellow" ,color:"black"}}>+1</button>
      </div>

      <div>
        <p>Green move: {move.green}</p>
        <button onClick={incergreen} style={{ backgroundColor: "green", color:"black"}}>+1</button>
      </div>
    </>
  );
}

export default Ludo;
