import './App.css';
import ButtonList from './Components/ButtonList/ButtonList';
import ComparsionSlider from './Components/ComparsionSlider/ComparsionSlider';
import FirstLetterLarger from './Components/FirstLetterLarger/FirstLetterLarger';
import ImageSpliter from './Components/ImageSpliter/ImageSpliter';
import PhotoTest from './Components/Lightbox/PhotoTest';
import LogoSlider from './Components/LogoSlider/LogoSlider';
import WordRotation from './Components/WordRotation/WordRotation';
import WordTyping from './Components/WordTyping/WordTyping';

function App() {
  return (
    <div className="App">
      <WordRotation/>
      <PhotoTest/>
      <FirstLetterLarger/>
      <LogoSlider/>
      <ComparsionSlider
        photo1={'https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        photo2={'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        logo={'https://www.camping-lescypres85.co.uk/wp-content/uploads/2021/11/cropped-favicon.png'}
      />
      <WordTyping/>
      <ButtonList/>
      <ImageSpliter/>
    </div>
  );
}

export default App;
