import './App.css'
import AppRouter from './AppRouter'

export type RegistrationInputsType={
        email:string,
        username:string,
        password:string,
        isValid:boolean,
}

const App=()=>{


    return <AppRouter/>
}

export default App