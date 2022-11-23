import { login } from "features/user"
import { useDispatch } from "react-redux"

const Login=()=>{


    const dispatch = useDispatch()
    const handleLogIn=()=>{
       dispatch(login({login:"armen21",passowrd:'Armen.21.06'})) 
    }
    
    return<div>
        <button onClick={handleLogIn}>Login</button>
        </div>
}

export default Login