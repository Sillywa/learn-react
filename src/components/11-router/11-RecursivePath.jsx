import React from "react";

import {
  Route,
  useParams,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] },
];

export default function RecursivePath() {
  return (
    <div>
      <Route path="/:id">
        <Person />
      </Route>
      <Redirect from="/" to="/0" />
    </div>
  );
}

function Person() {
  // url 拿到的当前的匹配
  const { url } = useRouteMatch();
  console.log(url);
  const { id } = useParams();
  const person = find(id);

  return (
    <div>
      <h1> {person.name} 的朋友是：</h1>

      <ul>
        {person.friends.map((pid, i) => (
          <li key={i}>
            <Link to={`${url}/${pid}`}>{find(pid).name}</Link>
          </li>
        ))}
      </ul>
      
      {/* 递归渲染 */}
      <Route path={`${url}/:id`}>
        <Person />
      </Route>
    </div>
  );
}

function find(id) {
  return PEEPS.find((p) => p.id === parseInt(id));
}
