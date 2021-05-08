import React from "react";
import { Route, Switch, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

export default function Sidebar() {
  return (
    <div style={{display: "flex"}}>
      <div className="sidebar">

        <ul>
          {routes.map(({ path }, i) => (
            <li key={i}>
              <Link to={path}>
                {path === "/" ? "home" : path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <Switch>
          {routes.map(({ path, exact, sidebar }, i) => (
            <Route key={i} exact={exact} path={path} children={sidebar} />
          ))}
        </Switch>

      </div>
      <div className="main">

        <Switch>
          {routes.map(({ path, exact, main }, i) => (
            <Route key={i} exact={exact} path={path} children={main} />
          ))}
        </Switch>

      </div>
    </div>
  );
}
