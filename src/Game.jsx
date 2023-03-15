import { useNavigate } from "react-router-dom";
import { useState } from "react";
import questionList from "./question-list";

export default function Game({ userAnswerList, setUserAnswerList }) {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentGame, setCurrentGame] = useState(questionList[0]);
  const [inputValue, setInputValue] = useState("");

  function onclickSubmit(userAnswer) {
    if (questionNumber + 1 < questionList.length) {
      setQuestionNumber(questionNumber + 1);
      setCurrentGame(questionList[questionNumber + 1]);
    } else {
      navigate("/result");
    }
  }
  return (
    <>
      <div className="game-number">💡{questionNumber + 1}번 문제</div>
      <div className="game-question">{currentGame.question}</div>
      <div className="game-answer-list">
        {currentGame.answerList &&
          currentGame.answerList.map((answerItem) => (
            <div
              className="game-answer-item"
              onClick={() => onclickSubmit(answerItem)}
            >
              ☑️{answerItem}
            </div>
          ))}
        {!currentGame.answerList && (
          <>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={() => onclickSubmit(inputValue)}>다음</button>
          </>
        )}
      </div>
    </>
  );
}
