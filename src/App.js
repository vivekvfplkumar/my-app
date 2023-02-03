import './App.css';
import CardImage from './Components/CardImage/CardImage';
import CardInfo from './Components/Cards/CardInfo';
import Herosection from './Components/HeroSection/Herosection';
import Introduce from './Components/Introducing/Introduce';
import Navbar from './Components/Navbar/Navbar';
import NewsLetter from './Components/NewsLetter/NewsLetter';
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
      <CardImage/>
      {/* <Introduce/> */}
      <NewsLetter/>
      
      
    </div>
  );
}

export default App;
