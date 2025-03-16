// import { useState } from 'react'
// import reactLogo from './assets/react.svg' 실습할 때는 안 쓸 거임
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx"; //윈도우, 맥에선 대소문자 구별 안 함 여기서 소문자를 쓰니까 오류 표시가 안 뜨네..
import Main from "./components/main.jsx"
import Footer from "./components/Footer.jsx"
import Button from "./components/Button.jsx"

function App() { //함수가 html태그를 리턴하고 있다면 이 함수를 컴포넌트라고 부르기로 했다.
  // const [count, setCount] = useState(0) 쓰지 않는다.

  //스프레드를 써서 html부분을 좀 더 깔끔히 하자.
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2 //이런 식으로 프롭스가 너무 많다면 html에 지저분해질 수 있었다.
  }

  return ( //부모 컴퍼넌트, 또한 App가 모든 컴퍼넌트의 죄상위 부모라서 root컴퍼넌트라고도 부른다.
    <>
      <Header></Header>

      {/* Props로 데이터 전달하기(props는 값을 전달하다.라는 의미로 쓰인다.) */}
      <Button {...buttonProps}></Button> {/* 여기서 text가 props가 된다. 이걸 불러진 함수의 매개변수로 받을 수 있으며 꼭 text가 아니여도 된다. */}
      <Button text={"카페"}></Button>
      <Button text={"블로그"} color={"green"}>
        <span>자식 요소</span> {/* 또한 이런 식으로 해도 div태그가 프롭스로 전달된다. */}
        <Header></Header> {/* 또한 컴포넌트까지 프롭스로 전달된다. */}
      </Button>

      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
