import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../const.js";
import Result  from "../components/Result/Result";
export default function Resultpage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  console.log(location);
  return (
    <>
    <div>
      Resultpage
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
    <br />
    <Link to ={ROUTES.QUIZ}>もう一度プレイ</Link>
    </div>
    </>
  )
}
