import React, {useState} from "react";
import AppRouter from "./Router";
import firebase from "../firebaseInstance";

function App() {
  const [isLoggedIn, setIsLoggedIm] = useState(true); // eslint-disable-line no-unused-vars
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
  //이렇게 app.js가 모든걸 통제하게 하는 이유는, 만약에 이 밑에다가 다른 걸 추가 할 수도 있기 때문이지.
  //예를 들면, footer 같은 것들
}

export default App;
