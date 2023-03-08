import { useState } from "react";
import questionList from "./question-list";
import { useNavigate } from "react-router-dom";

function Game({ userAnswerList, setUserAnswerList }) {
  const navigate = useNavigate();

  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0]);

  function onClickAnswerItem(answerIndex) {
    setUserAnswerList([...userAnswerList, answerIndex]);
    if (questionNumber + 1 < questionList.length) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questionList[questionNumber + 1]);
    } else {
      navigate("/result");
    }
  }

  return (
    <div className="game">
      <div className="game-number">{questionNumber + 1}번 문제</div>
      <div className="game-question">💡{currentQuestion.question}</div>
      <div className="game-answer-list">
        {currentQuestion.answerList.map((answerItem, index) => (
          <div
            key={answerItem}
            className="game-answer-item"
            onClick={() => onClickAnswerItem(index)}
          >
            🔘{answerItem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
