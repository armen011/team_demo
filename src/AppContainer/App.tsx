import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import store from "app";
import Socket from "socket";
import {createContext, Dispatch, SetStateAction, useState} from "react";


type TContext = {
    isCreateModalOpened: boolean,
    setIsCreateModalOpened: Dispatch<SetStateAction<boolean>>
}
export const context = createContext<TContext | null>(null)

const App = () => {
    const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);


    return (
    <Provider store={store}>
      <div>
        <Socket.Provider>
        <context.Provider value={{isCreateModalOpened,setIsCreateModalOpened}}>
            <AppRouter />
        </context.Provider>

        </Socket.Provider>
      </div>
    </Provider>
  );
};

export default App;
