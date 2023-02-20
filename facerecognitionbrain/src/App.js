import './App.css';
import Navigation from './components/navigation/navigation';
import React from 'react';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';
import Calarifi from 'clarifai-nodejs-grpc';



class App extends Component {
  constructor() {
  super();
  this.state = {
    input: '',
  }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl: this.state.input})
  }

  render() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#FFFFFF"/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  
  );
    }
}

export default App;
