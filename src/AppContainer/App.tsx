import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import store from "app";
import Socket from "socket";

const App = () => {
  return (
    <Provider store={store}>
      <Socket.Provider>
        <AppRouter />
      </Socket.Provider>
    </Provider>
  );
};

export default App;
