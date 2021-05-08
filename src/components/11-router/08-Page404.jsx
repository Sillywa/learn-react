import React from "react";
import {
  Route,
  Link,
  Redirect,
  Switch,
  useParams,
  useLocation,
} from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location.state); // {id: 12}
  return <div>Home {location.state.id}</div>;
};

const About = () => {
  const params = useParams();
  console.log(params); // {id: "123"}
  return <div>About: {params.id}</div>;
};

const Search = () => {
  const location = useLocation();
  console.log(location.search);

  // 通过 URLSearchParams 格式化 search
  const search = new URLSearchParams(location.search);
  console.log(search.get("id"));
  return <div>Search</div>;
};

const NotFound = () => <h2>404 Not Found</h2>;

export default function Page404() {
  return (
    <div>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/home",
              state: {
                id: 12,
              },
            }}
          >
            home
          </Link>
        </li>
        <li>
          <Link to="/about/123">about</Link>
        </li>
        <li>
          <Link to="/search?id=111">search</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about/:id">
          <About />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Redirect
          exact
          from="/"
          to={{
            pathname: "/home",
            state: {
              id: 12,
            },
          }}
        />
        {/* 404 */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
