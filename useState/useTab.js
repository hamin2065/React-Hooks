import React, { useState } from "react";

//불러올 content
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  //allTabs가 아니거나 allTabs가 배열이 아닌경우는 종료시킨다.
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex

  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (

        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
//현재 내가 선택한 Section의 content만 보여주는것이 목표!
/*버튼을 클릭하면 changeItem에게 index를 전달시켜서 setCurrentIndex를 바꿔주고 이것은 state를 바꿔줄 것이다.(useState) 
그러면 currentItem의 currentIndex를 바꿔서 모든 것을 새로고침한다.*/