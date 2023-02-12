import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import bombergirl from '../images/bombergirl.jpeg';
import dancegame from '../images/dancegame.jpeg';
import pokergame from '../images/pokergame.jpeg';
import racegame from '../images/racegame.jpeg';


const GamePage = () => {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px 0' }}>
      <h1 style={{ fontSize: '36px' }}>My Image Gallery</h1>
    </header>
    <table>
      <tbody>
        <tr>
          <td>
            <Link to="https://6am3r.github.io/poker" target="_blank" rel="noreferrer">
                <img src={pokergame} alt='PokerGame' style={{ width: '50%', height: '50%', border: '1px solid black' }}></img>
            </Link>
          </td>
          <td>
            <Link to="https://6am3r.github.io/rally" target="_blank" rel="noreferrer">
                <img src={racegame} alt='CarGame' style={{ width: '50%', height: '50%', border: '1px solid black' }}></img>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="https://nodecode-zeta.vercel.app/dance12.html" target="_blank" rel="noreferrer">
                <img src={dancegame} alt='DanceGame' style={{ width: '50%', height: '50%', border: '1px solid black' }}></img>
            </Link>
          </td>
          <td>
            <Link to="https://6am3r.github.io/bombergirl" target="_blank" rel="noreferrer">
                <img src={bombergirl} alt='BomberGirl' style={{ width: '50%', height: '50%', border: '1px solid black' }}></img>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default GamePage;