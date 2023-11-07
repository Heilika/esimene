import Luuletus1 from './Luuletus1';
import Luuletus2 from './Luuletus2';
import logo from './logo.svg';
import './App.css';

function App() {
  const eesNimi = 'Heilika';
  const pereNimi = 'Ahven';
  const number = 10;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link">
          Minu nimi on {eesNimi} {pereNimi} {number + 100}
        </div>
        <Luuletus1 />
       <div>----------------------------</div>
        <Luuletus2 />
      </header>
    </div>
  );
}

export default App;
