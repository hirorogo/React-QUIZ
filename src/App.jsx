import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Quizpage from './pages/Quizpage'
import Resultpage from './pages/Resultpage'
import { ROUTES } from './const.js' // ROUTESをimport

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.QUIZ} element={<Quizpage />} />
        <Route path={ROUTES.RESULT} element={<Resultpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
