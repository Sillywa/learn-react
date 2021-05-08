import {
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

const fakeAuth = {
  // 判断是否登录
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const PublicPage = () => <div>PublicPage</div>;

const ProtectedPage = () => <div>ProtectedPage</div>;

const AuthButton = () => {
  const history = useHistory()
  // 登出
  const signout = () => {
    history.push("/")
  }
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={signout}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
};

const LoginPage = () => {
  const history = useHistory();
  // Redirect 通过 to 传递的数据在 location 里面
  const location = useLocation();
  const { from } = location.state;
  const login = () => {
    fakeAuth.authenticate(() => {
      // 重新渲染 from 的组件
      history.replace(from);
    });
  };
  return (
    <div>
      <p>
        You must log in to view the page at <strong>{from}</strong>
      </p>
      <button onClick={login}>Login</button>
    </div>
  );
};

// 自定义的一个 Route
const PrivateRoute = ({ children, ...rest }) => {
  const { pathname } = useLocation();
  // Redirect 可以通过 to 传一个 object，让目标路由获取额外的数据
  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: pathname,
            },
          }}
        />
      )}
    </Route>
  );
};

export default function AuthExample() {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/public">
          <PublicPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/protected">
          <AuthButton />
          <ProtectedPage />
        </PrivateRoute>

        <Redirect from="/" to="/public">
        </Redirect>

      </Switch>
    </div>
  );
}
