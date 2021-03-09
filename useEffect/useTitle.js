import React, { useEffect, useState } from "react";

import "./styles.css";

const useTitle = (initialTitle) => {
  //initialTitle에 "Loading..."이 들어가고 title에도 들어감
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  //useEffect가 mount되면 위의 htmlTitle이 "Loading..."이된다.
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  //처음에 "Loading..."으로 초기화
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}