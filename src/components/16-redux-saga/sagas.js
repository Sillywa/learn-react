import { takeEvery, put } from "redux-saga/effects"
function *sagas() {
  // 接受所有的 dispatch 对应的 action 请求
  console.log("sagas")
  // action 和 回调函数
  // 当 dispatch 一个 sagaAdd 类型的 action 就会执行 sagaAsync，该类型是一个扁平化的 action，不能与 reducer 里面的 action 重名
  yield takeEvery("sagaAdd", sagaAsync)
}

function *sagaAsync() {
  console.log("sagaAsync")
  // 这个才是真正的 reducer 里面的 action，这里就会触发执行 reducer
  // 这里可以做异步请求
  yield put({type: "add", data: 100})
}

export default sagas