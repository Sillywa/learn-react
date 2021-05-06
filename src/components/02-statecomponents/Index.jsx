import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count: 0
    };
  }
  handleBtnClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    }, () => {
      console.log(this.state.count);
    });
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // }, () => {
    //   console.log(this.state.count);
    // })
    
  };
  render() {
    const { show, count } = this.state;
    return (
      <div>
        <div>{show ? "show=true" : "show=false"}</div>
        <div>{count}</div>
        <button onClick={this.handleBtnClick}>increment</button>
      </div>
    );
  }
}

export default Index;
