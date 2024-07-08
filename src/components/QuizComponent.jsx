import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import ProgressBar from "./ProgressBar";
import { shuffledQuestions } from "../data/questions";
import { optionsLabels } from "../data/constants";

const QuizComponent = () => {
  const totalPages = shuffledQuestions.length;
  const [currentPage, setCurrentPage] = useState(1);
  // const pagesRef = useRef([]);
  // const linksRef = useRef([]);
  const currentQuestion = shuffledQuestions[currentPage - 1];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleOptionChange = (questionIndex, option, i) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: i,
    });

    // Check if the selected option is correct and update score
    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // navigate to next page
  const handleNext = () => {
    setTimeout(() => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    }, 1500);
  };

  //  handle quiz submission
  const handleSubmit = () => {
    const allQuestionsAnswered =
      Object.keys(selectedAnswers).length === totalPages;
    if (allQuestionsAnswered) {
      return navigate("/result", {
        state: { score, selectedAnswers, shuffledQuestions },
      });
    }
    return alert("Please answer all questions ");
  };



  return (
    <>
      <div className="question-container p-4  ">
        <TopNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        <ProgressBar currentPage={currentPage} totalPages={totalPages} />
      </div>
     
      <div className="question-container question-card p-4 pt-0 mt-0 ">
        <p className="question-text">{currentQuestion.question}</p>
        <p className="question-subtext mt-4 mb-3">History of art</p>
      </div>

      <div className="options-container p-4">
        {currentQuestion.options?.map((option, i) => (
          <label className="option" key={i} >
            <input
              type="radio"
              name={`option-${currentPage}`}
              value={option.isCorrect}
              checked={selectedAnswers[currentPage] === i}
              onChange={() => handleOptionChange(currentPage, option, i)}
              onClick={handleNext}
            />
            <span>{optionsLabels[i]}</span>
            <span className="option-text ms-2">{option.label}</span>
          </label>
        ))}

        {currentPage === totalPages && (
          <button className="submit-button ms-2" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default (QuizComponent);
