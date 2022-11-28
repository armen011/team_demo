import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import store from "app";
import BirthdayPage from "pages/Registration/BirthdayPage";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
