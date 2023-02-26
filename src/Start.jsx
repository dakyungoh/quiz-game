import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  function onClickStartButton() {
    navigate("/game");
  }

  return (
    <div className="start" onClick={onClickStartButton}>
      게임 시작하기
    </div>
  );
}

export default Start;
