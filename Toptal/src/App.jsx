import './App.css';
import CertificateSlider from './components/CertificateSlider';
import HomeOne from './components/HomeOne';
import ImagesSlider from './components/ImageSlider';
import Images from './components/Images';
import Practice from './components/Practice';
import { Header } from './layouts/Header';

function App() {
  return (
    <>
      <Header />
      <HomeOne />
      <CertificateSlider />
      <ImagesSlider />
      {/* <Practice /> */}
    </>
  );
}

export default App;
