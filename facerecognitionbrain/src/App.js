import './App.css';
import Navigation from './components/navigation/navigation';
import React from 'react';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#FFFFFF"/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*}
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
