
import React, { Component } from 'react';
import './App.css';
class ClassComponent extends Component {
    
    render() {
        return (
            <div>
                <h1>This Is created using Class Component</h1>
                <p>This Is using Internal Css</p>
                <p style={{color:"green"}}>This is done Using Inline CSS</p>
            </div>
            
        );
    }
}

export default ClassComponent;
