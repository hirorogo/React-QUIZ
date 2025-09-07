import { useEffect, useState } from "react";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Quizpage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  useEffect(() => {
    const correctNum = answerLogs.filter((answer) => answer === true);
    if (quizIndex === MAX_QUIZ_LEN) {
      navigation("/result", {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length,
        },
      });
    }
  }, [quizIndex, MAX_QUIZ_LEN, answerLogs, navigation]);

  // クイズが終わったら何も表示しない
  if (quizIndex >= MAX_QUIZ_LEN) {
    return null;
  }

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
