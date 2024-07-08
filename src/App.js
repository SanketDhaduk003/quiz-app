import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizComponent from './components/QuizComponent';
import './App.css';
import Results from './components/Results';

function App() {
  return (
    <Router>

      <div className="quiz-container">
        <Routes>
          <Route path="/" element={<QuizComponent />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </div>



    </Router>

  )
}

export default App;
