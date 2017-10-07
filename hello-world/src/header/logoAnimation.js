import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../animations/lamp.json'
 

class LottieControl extends Component {
    
     constructor(props) {
       super(props);
       this.state = {isStopped: false, isPaused: false};
     }
     pause() {
        alert("hello")
        this.setState({isStopped:true})
     }
     resume() {
        this.setState({isPaused:false})
     }
     render() {
       const buttonStyle = {
         display: 'inline',
         margin: '10px auto'
       };
    
       const defaultOptions = {
         loop: true,
         autoplay: true, 
         animationData: animationData,
       };
    
       return (
       <div>
         <Lottie options={defaultOptions}
                 height={80}
                 width={80}
                 isStopped={this.state.isStopped}
                 isPaused={this.state.isPaused}/>
       </div>
       )
     }
   }

   export default LottieControl;