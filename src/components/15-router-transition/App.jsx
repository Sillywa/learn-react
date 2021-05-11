import React, { useState } from 'react'

import { Route, Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import "./style.css"
import "animate.css"

const Home = () => (
  <div>Home</div>
)
const Foo = () => (
  <div>Foo</div>
)
const Bar = () => (
  <div>Bar</div>
)

export default function App() {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foo">Foo</Link></li>
        <li><Link to="/bar">Bar</Link></li>
      </ul> */}
      {/* <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/foo">
        <Foo />
      </Route>
      <Route path="/bar">
        <Bar />
      </Route> */}
      <CSSTransition
        in={show}
        timeout={1000}
        appear={true}
        classNames={{
          appear: "animate__animated",
          appearActive: "animate__heartBeat",
          enter: "animate__animated",
          enterActive: "animate__rubberBand",
          exit: "animate__animated ",
          exitActive: "animate__jello"
        }}
        mountOnEnter
        unmountOnExit
      >
        <div style={{fontSize: "50px"}}>Hello</div>
      </CSSTransition>
     
      <button onClick={handleClick}>click</button>
    </div>
  )
}
