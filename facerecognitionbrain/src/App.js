import './App.css';
import Navigation from './components/navigation/navigation';
import React from 'react';
import Logo from './components/logo/logo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*}
      <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
