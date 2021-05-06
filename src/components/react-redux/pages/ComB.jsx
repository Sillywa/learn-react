import { connect } from "react-redux"

// class ComB extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.count}
//       </div>
//     )
//   }
// }

const ComB = ({count}) => (
  <div>{count}</div>
)

const mapStateToProps = (state) => {
  // state更新之后，获取最新的 state，并且 connect 帮助我们自动调用组件 render
  console.log("ComB", state);
  // 数据注入到 ComB 的 props 
  return {
    count: state
  }
}

export default connect(mapStateToProps)(ComB)
