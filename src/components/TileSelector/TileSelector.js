import React from 'react'
import './TileSelector.css'
import useHover  from '../../hooks';

const TileSelector = (props) => {
  const [ref, hovered] = useHover();

  const dropdown = (
        <div className='tileSelectorContent' >
          <div onClick={() => props.handleNumTileChange(4)} className='number'>4</div>
          <div onClick={() => props.handleNumTileChange(16)} className='number'>16</div>
          <div onClick={() => props.handleNumTileChange(36)} className='number'>36</div>
        </div>
  )

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div ref={ref} className='tileSelectorDropdown'>
       {props.numTiles}
       { hovered ? dropdown : null }
     </div>
   </div>
 )
}

export default TileSelector
