import { useNavigate } from "react-router-dom";

function LandingPage() {
  const Navigate = useNavigate();

  function onClickHandler() {
    Navigate("/home");
  }
  return (
    <div>
      <h1>LANDING PAGE</h1>
      <button onClick={onClickHandler}>HOME</button>
    </div>
  );
}

export default LandingPage;
