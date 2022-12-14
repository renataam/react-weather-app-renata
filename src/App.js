import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rio de Janeiro"/>
        <footer>
          This project was code by Renata Monteiro and is{" "}
          <a
            href="https://github.com/renataam/react-weather-app-renata"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

