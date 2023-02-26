import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Game from "./Game";
import Start from "./Start";
import Result from "./Result";

function App() {
  const [userAnswerList, setUserAnswerList] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/game",
      element: (
        <Game
          userAnswerList={userAnswerList}
          setUserAnswerList={setUserAnswerList}
        />
      ),
    },
    {
      path: "/result",
      element: <Result userAnswerList={userAnswerList} />,
    },
  ]);

  return (
    <div className="App">
      <div className="app-title">Quiz Game</div>
      <div className="app-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
