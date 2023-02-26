import { useState } from "react";
import questionList from "./question-list";

function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0]);

  function onClickAnswerItem() {
    if (questionNumber + 1 < questionList.length) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questionList[questionNumber + 1]);
    } else {
      // 게임 종료 페이지로 이동
    }
  }

  return (
    <div className="game">
      <div className="game-number">{questionNumber}번 문제</div>
      <div className="game-question">{currentQuestion.question}</div>
      <div className="game-answer-list">
        {currentQuestion.answerList.map((answerItem) => (
          <div className="game-answer-item" onClick={onClickAnswerItem}>
            {answerItem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
