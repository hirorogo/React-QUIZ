import { useLocation } from "react-router-dom";

export default function Resultpage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  console.log(location);
  return (
    <div>
      Resultpage
      <p>あなたの正解数は: </p>
      <p>{`${correctNumLen} 問中/ ${maxQuizLen}問正解`}</p>
    </div>
  )
}
