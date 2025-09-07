import { useState } from "react";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import Button from "../components/Button/Button";
import { useNavigation } from "react-router-dom";

export default function Quizpage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const nabigation = useNavigation();
  const MAX_QUIZ_LEN = quizData.length;
  const quiz = quizData[quizIndex];
  const handleClick = (clickedIndex) => {
    if (clickedIndex === quiz.answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };

  return (
    <>
      <Display>
        {`Q${quizIndex + 1}. ${quiz.question}`}
      </Display>
      {quiz.options.map((option, index) => (
        <Button key={`option-${index}`} onClick={() => handleClick(index)}>
          {option}
        </Button>
      ))}
    </>
  );
}
