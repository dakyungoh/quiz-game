import questionList from "./question-list";
import { useNavigate } from "react-router-dom";

export default function Result({ userAnswerList, setUserAnswerList }) {
  const navigate = useNavigate();

  const totalCount = questionList.length;
  let score = 0;
  for (let i = 0; i < totalCount; i++) {
    if (questionList[i].correctAnswer === userAnswerList[i]) {
      score += 1;
    }
  }

  const score100 = Math.round((score / totalCount) * 100);

  function resetButton() {
    navigate("/");
    setUserAnswerList([]);
  }

  return (
    <div className="result">
      <div className="result-title">결과</div>
      <div className="result-questionNumber">
        {questionList.map((currentQuestion, questionNumber) => {
          return (
            <>
              <div className="result-question">{currentQuestion.question}</div>
              <div className="result-answer">
                정답:
                {currentQuestion.correctAnswer}
              </div>
              <div className="result-user-answer">
                답변 : {userAnswerList[questionNumber] || "-"}
              </div>
            </>
          );
        })}
      </div>
      <div>문제 갯수 : {totalCount}</div>
      <div>정답 갯수 : {score}</div>
      <div className="score">점수 : {score100}</div>
      <button className="reset=button" onClick={resetButton}>
        처음으로 돌아가기
      </button>
    </div>
  );
}
