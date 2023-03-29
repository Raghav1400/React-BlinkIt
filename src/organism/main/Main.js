import React, { Component } from 'react'
import './Main.module.css'
import {MainCategory,Subcategories,Section} from './organism/';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
       selectedCategory:'default',
       selectedSubcategory:'default'
    }
  }
  
  handleCategoryChange=(element)=>{
    this.setState({
      selectedCategory:element.getAttribute("category"),
      selectedSubcategory:'default'
    })
  }
  handleSubCategoryChange=(newsubcategory)=>{
    this.setState({
      selectedSubcategory:newsubcategory
    })
  }
  render() {
    const {selectedCategory,selectedSubcategory}=this.state;
    return (
      <>
        <MainCategory onCategoryChange={this.handleCategoryChange}/>
        <main>
          <Subcategories category={selectedCategory} onSubcategoryChange={this.handleSubCategoryChange}/>
          <Section category={selectedCategory} subcategory={selectedSubcategory}/>
        </main>
      </>
      
    )
  }
}

export default Main
