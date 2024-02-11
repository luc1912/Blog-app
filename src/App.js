import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Home />
        <h1>App Componenet</h1>
      </div>
    </div>
  );
}

export default App;
