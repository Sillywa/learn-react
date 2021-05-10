import React, { Component } from "react";

// import { List, Map, Seq, fromJS, Set } from "immutable";

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
    

    const list = List(["a", "b", "c"])
    const list2 = list.push("d")
    const list3 = list.shift()
    log(list);   //   ["a", "b", "c"]
    log(list2);  //   ["a", "b", "c", "d"]
    log(list3);  //   ["b", "c"]
    */
   /*
    function log(imm) {
      console.log(imm.toJS());
    }
*/
    // map 返回一个新的 Map，返回值改变了原来的 value
    /*
    const map = Map({ x: 0, y: 1, z: 2 });
    const result = map.map((value, key) => {
      return key.toUpperCase()
    }).join(",")
    */
    /*
    const result = map.flip().map(v => v.toUpperCase()).flip()
    log(result);
    */
    /*
    const map1 = Map({ x: 0, y: 1, z: { o: 230, w: 300 } });
    const map2 = Map({
      a: 100,
      y: 200,
      z: {
        w: 300,
      },
    });
    const obj = {
      y: 300
    }
    // map2 覆盖 map1，只是浅 merge
    const map3 = map1.mergeDeep(map2, obj);
    log(map3);
    */

    /*
    const list1 = List(["a", "b", "c"]);
    const list2 = List(["d", "f"]);
    const arr = ["g", "h"]
    const list3 = list1.concat(list2, arr);
    log(list3);
    */

    /*
    const obj = {
      x: 0,
      y: 1,
      z: 2
    }
    /*
    const map = Map(obj).map((v, k) => {
      console.log("map", k, v);
      return v + 1
    })
    const seq = Seq(obj).map((v, k) => {
      console.log(k, v);
      return v + 1
    })
    log(seq)
    */

    /*
    const obj = {
      x: 0,
      y: [
        {
          name: "sillywa",
          age: 23,
        },
        {
          name: "xinda",
          age: 24,
        },
      ],
    };
    const result = fromJS(obj)
    console.log(result);
    */
    /*
    const deep = Map({
      a: 1,
      b: 2,
      c: List([3, 4, 5]),
    });
    console.log(deep.toObject());
    console.log(deep.toJS());
    console.log(deep.toArray());
    */
    /*
   const list = List([1, 2, 3])
   const arr = [
     ...list,
     4
   ]
   console.log(arr);
   */

    /*
    const map = Map({
      x: 0,
      y: List(["a", "b", Map({ f: 900 })]),
      z: Map({
        w: 100,
      }),
    });
    // x -> 100
    const result = map.update("x", v => v + 1)

    const result2 = map.updateIn(["y", 2, "f"], v => v + 1)

    log(result2)
    */

    /*
    const map1 = Map({a: 1, b: 2})
    const map2 = Map({a: 1, b: 2})
    const set = Set().add(map1)
    console.log(set.has(map2));
    */

    /*
    const list1 = List(["a", "b", "c"])
    const list2 = list1.update(1, v => v+1)
    // log(list2)

    const list3 = list1.withMutations(list1 => {
      list1.push("d").push("e")
    })
    log(list3)
  
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result1 = arr
                  .filter((v) => {
                    console.log(v);
                    return v % 2 === 0
                  })
                  .map((v) => {
                    console.log(v);
                    return v * v
                  });

    const result2 = Seq(arr)
                    .filter(v => {
                      console.log("Seq", v);
                      return v % 2 === 0
                    })
                    .map(v => {
                      console.log("Seq", v);
                      return v * v
                    })
    // log(result2)
      */
    return <div>Immutable</div>;
  }
}
