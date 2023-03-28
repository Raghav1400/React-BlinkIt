import React from 'react'
import { connect } from 'react-redux'
import {PerkChild} from '../../molecules/footer'

function Perks(props) {
  return (
    <div id='perks'>
      {
        props.perks.map(
          function(element){
              return <PerkChild key={element.id} info={element}/>
          }
        )
      }
    </div>
  )
}

const mapStateToProps =(state,props)=> {
  return {
      perks:state.perks.perks
  }
}
export default connect(mapStateToProps,null)(Perks)