import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountryList />
      </header>
    </div>
  );
}

export default App;
