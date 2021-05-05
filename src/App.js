import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(props){
    super(props);
    console.log('CONSTRUCTOR DE App');
    this.state = {
      showCounter: false
    }
  }

  componentDidMount(){
    console.log('MÉTODO COMPONENTDIDMOUNT App');
  }

  toggleCounterShow = () => {
    // let newValue = false;
    // if(this.state.showCounter){
    //   newValue = false;
    // } else {
    //   newValue = true;
    // }
    // this.setState({ showCounter: newValue });
    
    this.setState({ showCounter: !this.state.showCounter });
  }
  render() {
    console.log('MÉTODO RENDER App');
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={() => this.toggleCounterShow()}>{this.state.showCounter ? "Ocultar contador" : "Mostrar contador"}</button>
        {/* { this.state.showCounter ? <Counter /> : ""} */}
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
