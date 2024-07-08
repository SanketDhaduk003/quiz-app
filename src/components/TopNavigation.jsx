import React from "react";
import { backIcon, forwardIcon } from "../data/icons";

function TopNavigation({ currentPage, setCurrentPage, totalPages }) {
  const handleBackNavigation = () => {
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="header m-3">
      <img
        src={backIcon}
        alt="back-icon"
        className="back-icon "
        onClick={handleBackNavigation}
      />

      <div className="centered-text ">
        <h4 className="question-number">
          <span className="current-page">{currentPage} </span>{" "}
          <span className="total-pages ">
            {" "}
            <span className="mx-1">/</span>
            {totalPages}
          </span>
        </h4>
      </div>
      {
        currentPage !== totalPages &&   <img
        src={forwardIcon}
        alt="back-icon"
        className="back-icon "
        onClick={handleNext}
      />
      }
    
    </div>
  );
}

export default TopNavigation;
