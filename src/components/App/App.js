import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles } from '../../misc/utils';

import './App.css';

class App extends Component{
  constructor(props) {
      super(props);

      this.state = {};

      this.state.numTiles = 36;
      this.state.playing = false;
      this.state.previousTileIndex = null;
      this.state.tiles = [];
      this.state.toBeCleared = null;
  }

  startGame(numTiles) {
    this.setState((state) => { 
      return { 
                previousTileIndex: null,
                toBeCleared: null,
                playing: true,
                tiles: createTiles(state.numTiles)
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Turbo-Matcher
        </header>
          <OptionsPanel startGame={this.startGame} playing={this.state.playing} numTiles={this.state.numTiles}/>
          <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      </div>
    );
  }
}

export default App;
