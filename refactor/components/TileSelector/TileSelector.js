import React from 'react'
import './TileSelector.css'
import useHover  from '../../hooks';
import GameContext  from '../../GameContext';

const TileSelector = (props) => {
  const [ref, hovered] = useHover();
  return ( 
    <GameContext.Consumer>
    {
      ({numTiles, handleNumTileChange}) => {
        const dropdown = (
              <div className='tileSelectorContent' >
                <div onClick={() => handleNumTileChange(4)} className='number'>4</div>
                <div onClick={() => handleNumTileChange(16)} className='number'>16</div>
                <div onClick={() => handleNumTileChange(36)} className='number'>36</div>
              </div>
        )

        return (
          <div className='tileSelector'>
            <div>Number of Tiles</div>
            <div ref={ref} className='tileSelectorDropdown'>
              {numTiles}
              { hovered ? dropdown : null }
            </div>
          </div>
        );
      }
    }
    </GameContext.Consumer>
  );
}

export default TileSelector
