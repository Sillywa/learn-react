import React, { Component } from "react";

import { connect } from "react-redux";
import { sendAction } from "../../reduxdemo/action";

class ComA extends Component {
  handleClick = () => {
    // 接收到 props
    console.log(this.props);
    this.props.sendAction()
  };
  render() {
    const { handleClick } = this;
    return (
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    );
  }
}

// 返回值是一个对象
const mapDispatchToProps = (dispatch) => {
  // dispatch 通过 props 传递给组件
  return {
    sendAction: () => {
      // 利用 dispatch 发送一个 action
      dispatch({
        type: "increment",
      });
    },
  };
};

// A 是发送数据的一方，需要实现 connect 的第二个参数
export default connect(null, mapDispatchToProps)(ComA);
