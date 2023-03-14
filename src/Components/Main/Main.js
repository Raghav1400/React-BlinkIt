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
       subcategory:'default',
       subcategoryData:subcategories,
       cardsData:this.props.cards
    }

    this.handleCategoryChange =this.handleCategoryChange.bind(this);
    this.handleSubCategoryChange=this.handleSubCategoryChange.bind(this);
  }
  
  handleCategoryChange(element){
    this.setState({
      category:element.getAttribute("category")
    },()=>{
        var newsubcategory=subcategories.filter(
          (element)=>{
            return element.category===this.state.category;
          }
        )
        var newcards=cards.filter(
          (element)=>{
            return element.category===this.state.category;
          }
        )
        this.setState({
          subcategoryData:newsubcategory,
          cardsData:newcards
        })
    })
  }
  handleSubCategoryChange(newsubcategory){
    this.setState({
      subcategory:newsubcategory
    },()=>{
        var newcards=cards.filter(
          (element)=>{
            return element.subcategory===this.state.subcategory;
          }
        )
        this.setState({
          cardsData:newcards
        })
    })
  }

  render() {
    return (
      <div>
        <MainCategory id='second-header' onCategoryChange={this.handleCategoryChange}/>
        <main>
          <Subcategories category={this.state.subcategoryData} onSubCategoryChange={this.handleSubCategoryChange}/>
          <Section cards={this.state.cardsData} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
        </main>
      </div>
      
    )
  }
}

export default Main
