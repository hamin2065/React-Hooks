import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
//import { elementType } from "prop-types";

import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  //full화면으로 만들어주는 함수
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {//Chrome, Safari
        element.current.requestFullscreen();
      } else if (element.current.requestFullscreen) {//firefox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {//opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {//microsoft
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  //full화면을 취소시켜주는 함수
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {//Chrome, Safari
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {//firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {//opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullScreen) {//microsoft
      document.msExitFullScreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);