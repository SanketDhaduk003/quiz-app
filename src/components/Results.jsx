import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { optionsLabels } from "../data/constants";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewAnswers, setViewAnswers] = useState(false);
  const { score, selectedAnswers, shuffledQuestions } = location.state || {
    score: 0,
    selectedAnswers: {},
    shuffledQuestions: [],
  };
  const percentage = (score / shuffledQuestions?.length) * 100;

  //  will restart quize with shuffled questions and options
  const handleRestart = () => {
    navigate("/");
    window.location.reload();
  };

  //  show correct and for each selected option
  const handleViewAnswers = () => {
    setViewAnswers(!viewAnswers);
  };
  return (
    <>
      <div className="result-page p-4">
        <div className="result-details">
          <h2>Quiz Results</h2>
          <div
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": `${percentage}` }}
          ></div>

          <p>
            Your score: <span className="primary-color">{score}</span> out of{" "}
            <span className="primary-color">
              {" "}
              {Object.keys(selectedAnswers).length}{" "}
            </span>
          </p>
        </div>

        <div className="flex-center result-action-btn">
          <button className="action-button" onClick={handleRestart}>
            Restart
          </button>

          <button className="action-button ms-2" onClick={handleViewAnswers}>
            {!viewAnswers ? "View Answers" : "Hide Answers"}
          </button>
        </div>
      </div>

      <div className="mt-3 result-container">
        {viewAnswers && (
          <div className="answers-container">
            <h3 className="flex-center ">Summary:</h3>
            {Object.keys(selectedAnswers)?.map((questionIndex, index) => (
              <div key={index} className="question-container ">
                <div className="ans-container p-4 ">
                  <p className="question-text ms-1">
                    {shuffledQuestions[index].question}
                  </p>
                  <p className="question-subtext mt-4 mb-3 ms-1">
                    History of art
                  </p>
                  {shuffledQuestions[index].options.map(
                    (option, i) =>
                      option.isCorrect && (
                        <div key={i} className="answer-option">
                          <span className="ms-1">Correct Ans:</span>
                          <label className="option ms-0">
                            <input type="radio" name={`option-${i}`} />
                            <span>{optionsLabels[i]}</span>
                            <span className="option-text ms-2">
                              {option.label}
                            </span>
                          </label>
                        </div>
                      )
                  )}

                  <div className="ms-1 mt-4">
                    Ans -{" "}
                    {selectedAnswers[questionIndex] ===
                    shuffledQuestions[index].options.findIndex(
                      (option) => option.isCorrect
                    ) ? (
                      <span style={{ color: "green" }}>Correct</span>
                    ) : (
                      <span style={{ color: "red" }}>Wrong</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ResultPage;
