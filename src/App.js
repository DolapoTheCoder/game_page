import logo from './logo.svg';
import './App.css';
import GamePage from './component/GamePage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GamePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
