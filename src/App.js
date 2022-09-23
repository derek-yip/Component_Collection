import './App.css';
import FirstLetterLarger from './Components/FirstLetterLarger/FirstLetterLarger';
import PhotoTest from './Components/Lightbox/PhotoTest';
import WordRotation from './Components/WordRotation/WordRotation';

function App() {
  return (
    <div className="App">
      <WordRotation/>
      <PhotoTest/>
      <FirstLetterLarger/>
    </div>
  );
}

export default App;
