import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import store from "app";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
