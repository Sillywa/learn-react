import { Link, Route } from "react-router-dom";

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches,
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus,
      },
      {
        path: "/tacos/cart",
        component: Cart,
      },
    ],
  },
];

export default function RouterConfig() {
  return (
    <div>
      <ul>
        {routes.map(({ path }, i) => (
          <li key={i}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
      {routes.map((route, i) => (
        <RouterWithSubRoutes key={i} route={route} />
      ))}
    </div>
  );
}
function RouterWithSubRoutes({ route, ...rest }) {
  return (
    <Route path={route.path}>
      <route.component {...rest} routes={route.routes} />
    </Route>
  );
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        {routes.map(({ path }, i) => (
          <li key={i}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
      {routes.map((route, i) => (
        <RouterWithSubRoutes key={i} route={route} />
      ))}
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}
