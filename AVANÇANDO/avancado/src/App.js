import DrinkLaranja from "./assets/Drink002.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div>
       {/* Imagem em Public */} 
       <h3>Drink de Espumante</h3>
       <img src="/Drink001.jpg" alt="Drink de espumante" height='255px'/>
      </div>
       {/* Imagem em Assets */}
       <h3>Drink de Laranja</h3>
       <img src={DrinkLaranja} alt="Drink de Laranja" height='230px' />
      <div>

      </div>
    </div>
  );
}

export default App;
