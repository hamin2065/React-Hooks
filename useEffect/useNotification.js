import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  //윈도우에서의 알람이 아니면 종료시킨다.
  if (!("Notification" in window)) {
    return;
  }
  //알람이 허락되는 경우에만 알람이 가도록 만들어준다.
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const triggerNotif = useNotification("Can I?", { body: "Yes you can!" });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*Hello버튼을 클릭하면 triggerNotif를 통해서 useNotification에 인자가 전달이 된다.
각각 title과 option에 전달이 되어서 조건을 만족시키면(알람을 허용해준 경우) 윈도우에서 알람이 뜨게된다.*/