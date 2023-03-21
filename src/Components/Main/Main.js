import React, { Component } from 'react'

import MainCategory from './MainComponents/MainCategory';
import Subcategories from './MainComponents/Subcategories'
import Section from './MainComponents/Section'
import subcategories from '../../data/subcategories.json' 
import cards from '../../data/cards.json' 

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       category:'default',
       subcategory:'default'
    }

    this.handleCategoryChange =this.handleCategoryChange.bind(this);
    this.handleSubCategoryChange=this.handleSubCategoryChange.bind(this);
  }
  
  handleCategoryChange(element){
    this.setState({
      ...this.state,
      category:element.getAttribute("category")
    })
  }
  handleSubCategoryChange(newsubcategory){
    this.setState({
      ...this.state,
      subcategory:newsubcategory
    })
  }
  
  render() {
    return (
      <div>
        <MainCategory id='second-header' onCategoryChange={this.handleCategoryChange}/>
        <main>
          <Subcategories category={this.state.category} onSubCategoryChange={this.handleSubCategoryChange}/>
          <Section category={this.state.category} subcategory={this.state.subcategory}/>
        </main>
      </div>
      
    )
  }
}

export default Main
