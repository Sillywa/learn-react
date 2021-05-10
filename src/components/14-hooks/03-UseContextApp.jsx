import React, { createContext, useContext } from "react";

/*
// 不使用 hooks
const { Provider, Consumer } = createContext();

const Child2 = () => (
  <div>
    <Consumer>
      {(props) => (
        <div>
          <span> {props.name} </span> is <span>{props.age}</span> years old
        </div>
      )}
    </Consumer>
  </div>
);

const Child1 = () => (
  <div>
    <Child2 />
  </div>
);

export default function UseContextApp() {
  const data = {
    name: "sillywa",
    age: 23,
  };
  return (
    <div>
      <Provider value={data}>
        <Child1 />
      </Provider>
    </div>
  );
}
*/

// 使用 hooks

const colorContext = createContext()

const Child2 = () => {
  const context = useContext(colorContext)
  return (
    <div>
      <span> {context.name} </span> is <span>{context.age}</span> years old
    </div>
  )
};

const Child1 = () => (
  <div>
    <Child2 />
  </div>
);

export default function UseContextApp() {
  const data = {
    name: "sillywa",
    age: 23,
  };
  return (
    <colorContext.Provider value={data}>
      <Child1 />
    </colorContext.Provider>
  )
}

