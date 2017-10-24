import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/part1.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class Part1 extends Component {

  render() {
    return (
    <div className="part1">
        <div className="column1">
        Qatar Racing and Equestrian Club is in Doha, the capital of Qatar.
        In recent years the economy of Qatar has grown rapidly with 
        wealth flowing into Doha chiefly from the country’s massive 
        reserves of natural gas.
        </div>
        <div className="column2">
        When first built the exterior lighting in and around the QREC 
        was mostly metal-halide, the best and most appropriate 
        technology available at the time. In recent years this had 
        become unreliable; individual fittings were failing, spares 
        were hard to obtain and the installation was expensive to run 
        both in terms of its power consumption and maintenance.

        </div>
        <div className="column3">
        Theart has had a growing presence in Qatar for more than 
        10 years, and is also active in Lebanon and Jordan. The firm 
        consist of several specialist divisions for metal fabrications, 
        joinery, fit-out, and the design and manufacture of signage and 
        display systems. The owner, Ahmad Mustapha takes a keen interest 
        in new technology, new construction techniques and innovative 
        design. Work started in 2015 and three phases of installation 
        have been completed. So far, the tunnel, the walls and facades 
        have all been lit with NVC’s LED surface wall lights. Most of 
        these are controlled with a dusk/dawn photocell.
        </div>

    </div>
    )
  }
}


export default Part1;