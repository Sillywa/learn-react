import React, { Component } from 'react'

import { List, Map } from "immutable"

export default class App extends Component {
  render() {

    /*
    const map1 = Map({
      a: 0,
      b: 1
    })
    
    const map2 = map1.set("a", 100)

    console.log(map1.get("a")); // 0
    console.log(map2.get("a")); // 100

    // console.log(map1===map2);  // true

    */

    /*
    const map1 = Map({x: 0, y: 1})
    const map2 = map1.set("x", 0)

    
    console.log(map1 == map2); //true
    console.log(map1.equals(map2)); // true
    */

    /*
    function log(imm) {
      console.log(imm.toJS());
    }

    const list = List(["a", "b", "c"])
    const list2 = list.push("d")
    const list3 = list.shift()
    log(list);   //   ["a", "b", "c"]
    log(list2);  //   ["a", "b", "c", "d"]
    log(list3);  //   ["b", "c"]
    */

    const map = Map({x: 0, y: 1, z: 2})


    // map 返回一个新的 Map，返回值改变了原来的 value
    const result = map.map((value, key) => {
      return key.toUpperCase()
    }).join(",")
    console.log(result);

    return (
      <div>
        Immutable
      </div>
    )
  }
}
