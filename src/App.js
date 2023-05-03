import './App.css';
import ProfileImg from './components/profileImg';
import Description from './components/description';
import Text from './components/text.js';
import Navbar from './components/navbar';
import Slider from './components/slider';

function App() {
  return (
    <div className="App">
    <div >
  <ProfileImg />
  <Text />
   <Description />
  </div>
  {/* <Name /> */}
  <div className='skill'>
  <Navbar />
   <Slider />
  </div>
    </div>
  );
}

export default App;
