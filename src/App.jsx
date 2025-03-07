import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/' element/>
          <Route exact path='/' element/>
          <Route exact path='/' element/>
          <Route exact path='/' element/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
