import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      loading : false,
      character : {}
    }
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => this.setState({loading: true, character : data}))
      
  }

  render(){
    return(
      <div>
        <h1>{this.state.loading ? this.state.character.name : 'Loading...'}</h1>
      </div>
    )
  }
}

export default App;
