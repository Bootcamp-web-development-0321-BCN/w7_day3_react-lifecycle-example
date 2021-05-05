import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props);
    console.log('CONSTRUCTOR Counter');
    this.state = { 
      count: 0
    }
  }

  count = () => {
    // IMPORTANTE!! No se puede hacer this.state.count++
    // const newValue = this.state.count + 1;
    // this.setState({ count: newValue });
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount(){
    console.log('MÉTODO COMPONENTDIDMOUNT Counter');
    this.interval = setInterval(this.count, 1000);
  }

  componentWillUnmount(){
    console.log('MÉTODO COMPONENTWILLUNMOUNT Counter')
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('MÉTODO COMPONENT DID UPDATE Counter' + 'PREV PROPS',  prevProps,  'PREV STATE',  prevState);
  }

  render() {
    console.log("MÉTODO RENDER Counter");
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
