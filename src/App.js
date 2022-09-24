import './App.css';
import FirstLetterLarger from './Components/FirstLetterLarger/FirstLetterLarger';
import PhotoTest from './Components/Lightbox/PhotoTest';
import LogoSlider from './Components/LogoSlider/LogoSlider';
import WordRotation from './Components/WordRotation/WordRotation';

function App() {
  return (
    <div className="App">
      <WordRotation/>
      <PhotoTest/>
      <FirstLetterLarger/>
      <LogoSlider/>
    </div>
  );
}

export default App;
