import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//사용자가 스크롤을 사용할 때 지정한 무언가를 지나치면 실행

const useScroll = () => {

  //x:0, y:0으로 우선 초기화
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    //scroll할 때 onScroll이벤트가 실행되도록 지정
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);