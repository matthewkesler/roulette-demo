import React, { Component } from 'react';
import logoDesktop from './img/desktop.gif';
import logoMobile from './img/mobile.gif';
import Roulette from './components/Roulette.js';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="container">
            <h1>
               <picture>
                  <source srcSet={logoMobile} media="(max-width: 600px)"/>
                  <source srcSet={logoDesktop} media="(min-width: 601px)"/>
                  <img src={logoDesktop} alt="Karaoke Roulette"/>
               </picture>
            </h1>
            <Roulette />
         </div>
      );
   }
}

export default App;
