import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils';
import GameContext from '../../GameContext';

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {};

      this.state.numTiles = 36;
      this.state.playing = false;
      this.state.previousTileIndex = null;
      this.state.tiles = [];
      this.state.toBeCleared = null;
  }

  handleTileClicked(id, color) {
    this.setState((state) => {
      const tiles = state.tiles;
      const selectedTileIndex = indexOfSelected(tiles, id, color);

      let toBeCleared = state.toBeCleared;
      let previousTileIndex = state.previousTileIndex;

      if(toBeCleared !== null) {
        tiles[toBeCleared[0]].selected = false;
        tiles[toBeCleared[1]].selected = false;
        toBeCleared = null;
      }

      tiles[selectedTileIndex].selected = true;

      if(previousTileIndex !== null) {
        const previousTile = tiles[previousTileIndex];
        const selectedTile = tiles[selectedTileIndex];

        if(previousTile.id !== selectedTile.id && previousTile.color === color) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null
        }
      } else {
        previousTileIndex = selectedTileIndex;
      }

      return { toBeCleared, tiles, previousTileIndex }
    });
  }

  handleNumTileChange(num) {
    this.setState({ numTiles: num, playing: false, tiles: []});
  }
 
  startGame(numTiles) {
    this.setState((state) => { 
      return { 
                previousTileIndex: null,
                toBeCleared: null,
                playing: true,
                tiles: createTiles(state.numTiles, this.handleTileClicked)
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Turbo-Matcher
        </header>
          <GameContext.Provider value="state">
            <OptionsPanel handleNumTileChange={this.handleNumTileChange} startGame={this.startGame} playing={this.state.playing} numTiles={this.state.numTiles}/>
            <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
          </GameContext.Provider>
      </div>
    );
  }
}

export default App;
