import {Provider} from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import store from "app";
import Socket from "socket";

const App = () => {
    return (
        <Provider store={store}>
            <div>
             <Socket.Provider>
                <AppRouter/>
              </Socket.Provider>
            </div>
        </Provider>
    );

};

export default App;
