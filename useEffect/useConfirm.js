import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//useConfirm : 뭔가를 저장하거나 삭제하기 전에 한 번 더 확인해주는
const useConfirm = (message="", callback, rejection) => {
    if(!callback || typeof callback !== "function"){
        return;
    }
    if(!rejection || typeof rejection !== "function"){
        return;
    }
  const confirmAction = () => {
    if(confirm(message)){
      callback();
    }else{
        rejection();
    }
  }
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*버튼을 클릭하면 confirmDelete를 호출해서 메세지와 함수를 useConfirm으로 전달한다.
메세지가 잘 들어오면 callback함수를 호출해서 경고창이 잘 뜨도록 한다.*/