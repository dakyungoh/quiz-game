import { useNavigate } from "react-router";
import questionList from "./question-list";

function Result({ userAnswerList }) {
  const navigate = useNavigate();
  const totalQuestionCount = questionList.length;
  let score = 0;
  for (let i = 0; i < totalQuestionCount; i++) {
    if (questionList[i].correctAnswer === userAnswerList[i]) {
      score += 1;
    }
  }
  const score100 = Math.ceil((score / totalQuestionCount) * 100);

  return (
    <div className="result">
      <div className="result-title">결과</div>
      <div className="result-user-answer-list">
        {questionList.map((currentQuestion, questionNumber) => {
          return (
            <div key={currentQuestion.question}>
              <div className="game-number">{questionNumber + 1}번 문제</div>
              <div className="game-question">{currentQuestion.question}</div>
              <div className="game-answer">
                정답:{" "}
                {currentQuestion.answerList[currentQuestion.correctAnswer]}
              </div>
              <div className="user-answer">
                답변:{" "}
                {currentQuestion.answerList[userAnswerList[questionNumber]] ||
                  "-"}
              </div>
            </div>
          );
        })}
        <div>문제 개수: {totalQuestionCount}</div>
        <div>정답 개수: {score}</div>
        <div className="score">점수: {score100}</div>
        <button onClick={onclickReset}>처음으로 돌아가기</button>
      </div>
    </div>
  );
}

export default Result;
