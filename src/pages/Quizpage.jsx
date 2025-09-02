import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import Button from "../components/Button/Button";

export default function Quizpage() {
  const quizIndex = 0;
  const quiz = quizData[quizIndex];

  return (
    <>
      <Display>{`Q1. ${quiz.question}`}</Display>
      <Button>{quiz.options[0]}</Button>
      <Button>{quiz.options[1]}</Button>
      <Button>{quiz.options[2]}</Button>
    </>
  );
}
