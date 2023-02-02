import './App.css';
import CardInfo from './Components/Cards/CardInfo';
import Herosection from './Components/HeroSection/Herosection';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <CardInfo/>
    </div>
  );
}

export default App;
