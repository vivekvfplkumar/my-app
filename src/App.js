import './App.css';
import CardInfo from './Components/Cards/CardInfo';
import Herosection from './Components/HeroSection/Herosection';
import Navbar from './Components/Navbar/Navbar';
import OurService from './Components/OurService/OurService';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <div className='flex-flow-card'>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      </div>
      <OurService/>
    </div>
  );
}

export default App;
