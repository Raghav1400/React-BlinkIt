import React from 'react'

import perks from '../../../data/perks.json'
import PerkChild from './PerkChild'

function Perks() {
    var elements = perks.map(
        function(element){
            return <PerkChild info={element}/>
        }
    )
  return (
    <div id='perks'>
      {elements}
    </div>
  )
}

export default Perks
