import React from 'react'

function ProgressBar({currentPage = 1, totalPages = 1}) {
  const progress = (currentPage / totalPages ) * 100
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
      </div>
    </div>
  )
}

export default ProgressBar