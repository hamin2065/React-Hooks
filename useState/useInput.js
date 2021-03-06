import React, { useState } from "react";

import "./styles.css";
//validator : 특정문자를 쓸 수 없도록
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    //validator의 타입이 함수라면 willUpdate에 value값을 업데이트
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value); //willUpdate는 항상 true이기 때문에 항상 업데이트가 될 것이다.
    }
  };

  return { value, onChange };
};

export default function App() {
  //maxLen에 value값을 받아서 value.length값을 검사
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
//value = {name.value} onChange = {name.onChange} 합쳐서 {...name}이라고 쓴다.
/*
name을 사용해서 useInput에 "Mr."과 maxLen을 넣어준다.
validator가 바뀌면서 typeof validator을 검사하고 이 타입이 function이라면 willUpdate에 validator의 결과를 업로드한다.
여기서 validator은 maxLen이고 결과는 True또는 False이다.
value의 길이가 10보다 작으면 결과는 True이고 그렇지 않으면 False이다.
True인 경우에는 setValue(value)를 통해서 업데이트를 시킨다.
*/
/*
const maxLen = value => !value.includes("@");
라고 하면 '@'를 포함하고 있으면 false를 반환할 것이다.
그러면 '@'를 포함하지 않으면 업데이트를 하게된다.
*/
