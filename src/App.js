import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Componente3 from './components/Componente3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="box">
        <h1>
          Olá Mundo!
        </h1>
<h5>Meu primeiro projeto em React!</h5>
<h5 className="h5-gui">Guilherme Nunes</h5>
<HelloWorld />
<Componente3 nome='Guilherme' />
</div>
      </header>
    </div>
  );
}

export default App;
