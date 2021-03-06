import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//우리가 페이지를 닫기 전에 진짜로 떠날 것인지 팝업창을 통해서 물어봐준다.

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  //beforeunload는 윈도우가 닫히기 전에 함수가 실행이 되는 것을 허용한다.
  //또는 사람들이 페이지를 떠날 때, 함수가 실행되도록 하는 타입

  //enablePrevent함수는 addEventListener을 실행시켜줘서 팝업창이 나타나게 한다.
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  
  //disablePrevent함수는 removeEventListener을 실행시켜줘서 이벤트를 삭제해서 팝업창이 나타나지 않고 화면을 닫게 해준다.
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);