
import './App.css';
//Importation du composants principale.
import Search from './components/Search';

// Diffusion dans une div du composant qui gére la barre de recherche et les resultats
function App() {
  return (
    <div className="App">
     <Search/>
    </div>
  );
}

export default App;
