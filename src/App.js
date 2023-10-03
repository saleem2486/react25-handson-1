import React, { Component } from 'react';
import './App.css';
import FuntionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';


 
 export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showFuntionalComponent:false,
      showClassComponent:false,
    }
  }
toggleFunComp=()=>{
this.setState((prevState)=>({showFuntionalComponent:!prevState.showFuntionalComponent}))
}
toggleClassComp=()=>{
  this.setState((prevState)=>({showClassComponent:!prevState.showClassComponent}))
}
  render() {
    return (
      <div className='App'>
        <h1 style={{textShadow:"0px 0px 15px red"}}>Styling Using Functional and Class Component</h1>
        <button onClick={this.toggleFunComp}>To see Styling in functional Component</button>
        <button onClick={this.toggleClassComp}>To see Styling in Class Component</button>
        <div className='App1'>
        {this.state.showFuntionalComponent && <FuntionalComponent/>}
       
        </div>
       <div className='App2'>
       {this.state.showClassComponent && <ClassComponent/>}
       </div>
      </div>
    );
  }
 }
 
 export default App;
 