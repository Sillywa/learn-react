import store from "./store";
import ComA from "./pages/ComA";
import ComB from "./pages/ComB";

import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <ComA />
    <ComB />
  </Provider>
);

export default App;
