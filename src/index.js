import React from "react"
import ReactDOM from "react-dom"
// import Home from "./components/reduxdemo/page/Home"
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
// import CustomLink from "./components/11-router/04-CustomLink"
// import Redirects from "./components/11-router/05-Redirects"
// import Auth from "./components/11-router/06-Auth"
// import Params from "./components/11-router/07-Params"
// import Page404 from "./components/11-router/08-Page404"
// import Sidebar from "./components/11-router/09-Sidebar"
// import RecursivePath from "./components/11-router/11-RecursivePath"
// import App from "./components/12-immutable/App"
// import App from "./components/13-lazy/02-react-lazy/App"

// import UseStateApp from "./components/14-hooks/01-UseStateApp"
// import UseEffectApp from "./components/14-hooks/02-UseEffectApp"
// import UseContextApp from "./components/14-hooks/03-UseContextApp"
// import UseReducerApp from "./components/14-hooks/04-UseReducerApp"
// import UseCallbackApp from "./components/14-hooks/05-UseCallbackApp"
// import UseMemoApp from "./components/14-hooks/06-UseMemoApp"
// import Memoization from "./components/14-hooks/07-Memoization"
// import UseRefApp from "./components/14-hooks/08-UseRefApp"
// import CaptureValue from "./components/14-hooks/09-CaptureValue"
// import CustomHooks from "./components/14-hooks/10-CustomHooks"
// import UseImperativeHandle from "./components/14-hooks/11-UseImperativeHandle"
// import UseLayoutEffect from "./components/14-hooks/12-UseLayoutEffect"
// import UseLayoutEffect2 from "./components/14-hooks/13-UseLayoutEffect2"

// import App from "./components/15-router-transition/App"

import Sage from "./components/16-redux-saga/Saga"

import { Provider } from "react-redux"
import store from "./components/16-redux-saga/store"

// import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
  <Provider store={store}>
    <Sage />
  </Provider>,
  document.querySelector("#root")
)
