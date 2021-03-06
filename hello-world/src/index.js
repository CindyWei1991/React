import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Board from './App';
import Header from './header/header';
import Footer from './footer/footer';
import Part1 from './body/part1';
import NavbarResPonsive from './header/navbar';
import LottieControl from './header/logoAnimation';
import registerServiceWorker from './registerServiceWorker';
import './styles/Third Library/bootstrap.min.css'
import './styles/Third Library/bootstrap-theme.min.css'
ReactDOM.render(
    <div className="bodyContainer">
        <NavbarResPonsive />
        <Header />
        <Part1 />
        <Footer />
    </div>
, document.getElementById('root'));
registerServiceWorker();
