import { connect } from "react-redux";

// class ComA extends Component {
//   handleClick = () => {
//     // 接收到 props
//     console.log(this.props);
//     this.props.sendAction()
//   };
//   render() {
//     const { handleClick } = this;
//     return (
      
//     );
//   }
// }

const ComA = ({sendAction}) => (
  <div>
    <button onClick={sendAction}>+</button>
  </div>
)

// 返回值是一个对象
const mapDispatchToProps = (dispatch) => {
  // dispatch 通过 props 传递给组件
  return {
    // sendAction 将会注入到 ComA 的 props 中
    sendAction: () => {
      // 利用 dispatch 发送一个 action，触发 state 更新
      dispatch({
        type: "increment",
      });
    },
  };
};

// A 是发送数据的一方，需要实现 connect 的第二个参数
export default connect(null, mapDispatchToProps)(ComA);
