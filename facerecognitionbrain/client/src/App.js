import './App.css';
import Navigation from './components/navigation/navigation';
import React from 'react';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';
import SignIn from './components/signIn/signIn';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  // constructor() {
  // super();
  // this.state = {
  //   input: '',
  //   imageUrl: '',
  //   box: {},
  // }
  // }

  // calculateFaceLocation = (data) => {
  //   const image = document.getElementById('inputImage')
  //   const width = Number(image.width)
  //   const height = Number(image.height)
  //   console.log(width, height)
  //   // return {
  //   //   leftCol:
  //   //     topRow: 
  //   // rightCol:
  //   // bottomrRow:
  //   // }
  // }

  // displayFaceBox = (box) => {
  //   this.setState({box: box})
  // }
  

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl: this.state.input})
  }

 
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
      <Navigation />
      <Logo />
      <Rank />
      <Router>
        <Routes>
          <Route path='/' element={<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />} />
          <Route path='/' element={<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> } />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
