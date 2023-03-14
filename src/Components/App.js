import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import cards from '../data/cards.json' 
import Checkout from './Checkout/Checkout';
import Home from './Home';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cartCount:0,
         cartPrice:0,
         cards:cards
      }
      this.handleClickAdd=this.handleClickAdd.bind(this);
      this.handleClickMinus=this.handleClickMinus.bind(this);
      this.handleClickPlus=this.handleClickPlus.bind(this);
    }
  handleClickAdd(id){
    var prevCount=this.state.cartCount
    var newCards=this.state.cards
    var price;
    for(let i=0;i<newCards.length;i++){
        if(newCards[i].id===id){
            newCards[i].count++;
            price=Number(newCards[i].newPrice);
        }
    }
    this.setState({
        cartCount:1+prevCount,
        cartPrice:price+this.state.cartPrice,
        cards:newCards
    })
  }
  handleClickPlus(id){
    var prevCount=this.state.cartCount
    var newCards=this.state.cards
    var price;
    for(let i=0;i<newCards.length;i++){
        if(newCards[i].id===id){
            newCards[i].count++;
            price=Number(newCards[i].newPrice);
        }
    }
    this.setState({
        cartCount:1+prevCount,
        cartPrice:price+this.state.cartPrice,
        cards:newCards
    })
  }
  handleClickMinus(id){
    var prevCount=this.state.cartCount
    var newCards=this.state.cards
    var price;
    for(let i=0;i<newCards.length;i++){
        if(newCards[i].id===id){
            newCards[i].count--;
            price=Number(newCards[i].newPrice);
        }
    }
    this.setState({
        cartCount:prevCount-1,
        cartPrice:this.state.cartPrice-price,
        cards:newCards
    })
  }
  render() {
    return (
        <>
          <Routes>
            <Route path='/' element={<Home cartInfo={this.state} clickAdd={this.handleClickAdd} clickPlus={this.handleClickPlus} clickMinus={this.handleClickMinus}/>}/>
            <Route path='/checkout' element={<Checkout cartInfo={this.state} clickAdd={this.handleClickAdd} clickPlus={this.handleClickPlus} clickMinus={this.handleClickMinus}/>}/>
          </Routes>
        </>
    )
  }
}

export default App
