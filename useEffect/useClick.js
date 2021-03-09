import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useClick = (onClick) => {
  if(typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //component가 mount되지 않았을 때 eventListener가 배치되지 않게 하기 위해 
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    }; 
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  //title에 접근권한을 준다.
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/* useClick을 이용해서 useRef()를 만들고 주어진 reference를 title에 주었다.
그리고 그 title을 h1태그에 ref속성으로 주어서 상호작용할 수 있도록 만들어준다.
여기서 useEffect의 할 일은 reference안에 element.current가 있는지 확인하는 것이다.
그리고 if문을 통해서 조건이 맞으면 Click이벤트를 부여하는 것이다.*/