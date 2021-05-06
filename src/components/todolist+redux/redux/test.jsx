import React, { Component } from 'react'

import store from "./store"
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions"

export default class Test extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
  componentDidMount() {
    // 每次 state 更新时，打印日志
    // 注意 subscribe() 返回一个函数用来注销监听器
    const unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )

    // 发起一系列 action
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // 停止监听 state 更新
    unsubscribe();
  }
}
