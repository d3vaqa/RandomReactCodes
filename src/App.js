import './App.css';
import React, {Component} from 'react'
import Game from './Game'
import Random from './Random';
import Button from './Button';
import BrokenClick from './BrokenClick';
import RandomNumber from './RandomNumber';

class App extends Component{

  render(){
    return(
      <div className='App'>
        <Game />
        <Random maxNum={10}/>
        <Button />
        <hrr />
        <BrokenClick />
        <hr />
        <RandomNumber />
      </div>
    )
  }
}

export default App;
