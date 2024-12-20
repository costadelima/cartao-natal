import './App.css';
import caartaonatalscar from './caartaonatalscar.png';

function App() {
  return (
    <div className="App">
      <h1 className="title">Feliz Natal</h1>
      <div className="lights">
        <img src={caartaonatalscar} alt="Imagem de fundo" className="background-image" />
        <div className="lightCima"></div>
        <div className="lightBaixo"></div>
        <div className="lightCima"></div>
        <div className="lightBaixo"></div>
        <div className="lightCima"></div>
        <div className="lightBaixo"></div>
        <div className="lightCima"></div>
        <div className="lightBaixo"></div>
        <div className="lightCima"></div>
        <div className="lightBaixo"></div>
      </div>
    </div>
  );
}

export default App;
