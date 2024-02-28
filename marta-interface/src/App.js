import logo from './logo.svg';
import './App.css';
import LinesPage from './pages/LinesPage';
import FrontPage from './pages/FrontPage';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='line'>
          <Route path='gold' element={<LinesPage color={"gold"}/>}/>
          <Route path='red' element={<LinesPage color={"red"}/>}/>
          <Route path='blue' element={<LinesPage color={"blue"}/>}/>
          <Route path='green' element={<LinesPage color={"green"}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
