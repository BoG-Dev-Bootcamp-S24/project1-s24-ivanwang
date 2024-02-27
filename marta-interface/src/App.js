import logo from './logo.svg';
import './App.css';
import LinesPage from './pages/LinesPage';
import FrontPage from './pages/FrontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage/>}/>
        <Route path='line'>
          <Route path='gold' element={<LinesPage color={"gold"}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
