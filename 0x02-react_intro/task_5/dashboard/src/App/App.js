import logo from '../assets/Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="input-email">Email: </label>
        <input id="input-email" type="email" />
        <label htmlFor="input-password">Password: </label>
        <input id="input-password" type="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;
