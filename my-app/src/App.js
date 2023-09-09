import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Calenify</p>
        <p>
          <code>Calenify</code> work in progress.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Productivity modernized
        </a>
      </header>
    </div>
  );
}

export default App;
