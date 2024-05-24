import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Card from './components/Card/Card';
import Project from './components/Project/Project';
import {Fplace} from './components/Placeholders/Fplace';


class App extends Component{

  constructor(){
    super();
    this.state={
      slide: 0 ,
      img : Fplace,
    }
  }



  onButtonNext=()=>{ 
    let slides = this.state.slide;
    const img = this.state.img;
    if(slides+1 >= img.length){
      slides=0;
    } else {
      slides++;
    }
    return this.setState({slide:slides})
}
onButtonPrev=()=>{ 
    let slides = this.state.slide;
    const img = this.state.img;
    if(slides === 0 ){
      slides=img.length-1;
    } else {
      slides--;
    }
    console.log(slides)
    return this.setState({slide:slides})
}





  render(){
    return (
      <div>
      <Navigation/>
      <Card />
      <Project img={this.state.img} slide={this.state.slide} onButtonNext={this.onButtonNext} onButtonPrev={this.onButtonPrev} /> 
    
    </div>
    );
  }
}

export default App;
