// import React, { Component } from "react";
// import PropTypes from "prop-types";
/*
class Child extends Component {
  // 静态属性
  static defaultProps = {
    title: "defalut value"
  }
  render() {
    return (
      <div>
        child: {this.props.title}
      </div>
    )
  }
}
*/

// 函数式组件/无状态组件
const Child = (props) => {
  return (
    <>
      <div> function child {props.title}</div>
      { props.children }
    </>
  )   
};
Child.defaultProps = {
  title: "default value",
};
export default Child;
