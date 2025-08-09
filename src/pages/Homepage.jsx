import { Link }  from "react-router-dom"
import { ROUTES } from '../const.js' // ROUTESをimport
export default function Homepage() {
  return (
    <>
      <h1>QUIZ Time!!!</h1>
      <Link to={ROUTES.QUIZ}>Start </Link>
    </>
  )
}
