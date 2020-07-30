import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './components/joke'

function App() {
  const setup1={question:"Who?",joke:"punchline"}
  const setup2={question:"Naah?",joke:"yess!"}
  const setup3={question:"You Rock?", joke:"You wish!"}
  return (
    <div className="App">
      <Joke question={setup1.question} joke={setup1.joke}/>
      <Joke question={setup2.question} joke={setup2.joke}/>
      <Joke question={setup3.question} joke={setup3.joke}/>
      <Joke joke="Haha"/>
    </div>
  );
}

export default App;
