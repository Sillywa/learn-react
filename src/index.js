import React from "react"
import ReactDOM from "react-dom"
import Home from "./components/reduxdemo/page/Home"
// import CheckBox from "./components/formcomponents/CheckBox"
// import File from "./components/formcomponents/File"
// import TodoList from "./components/todolist/TodoList"
// import Index from "./components/statecomponents/Index"
// import StateUplifting from "./components/statecomponents/StateUplifting"
// import ControledCom from "./components/statecomponents/ControledCom"
// import EventTest from "./components/eventcomponents/EventTest"
// import InputCom from "./components/formcomponents/InputCom"
// import MulSelect from "./components/formcomponents/MulSelect"

// import App from "./App"
// import ClassStyle from "./components/stylecomponent/ClassStyle"
// import DataMount from "./components/propscomponents/DataMount"
// import App from "./components/lifecycle/App"
// import App from "./components/context/App"
// import App from "./components/context/count/App"
// import App from "./components/08-hoc/App"
// import App from "./components/09-portal/App"
// import App from "./components/10-redux/selfredux/App"
// import App from "./components/10-redux/redux/redux+react/App"

// import TodoList from "./components/todolist+redux/page/TodoList"
// import Test from "./components/todolist+redux/redux/test"
// import App from "./components/todolist+redux/page/App"

// import { Provider } from "react-redux"
// import store from "./components/todolist+redux/redux/store"

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector("#root")
// )

// import App from "./components/react-redux/App"
// import Nesting from "./components/11-router/03-Nesting"
import CustomLink from "./components/11-router/04-CustomLink"


import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
  <BrowserRouter>
    <CustomLink />
  </BrowserRouter>,
  document.querySelector("#root")
)
