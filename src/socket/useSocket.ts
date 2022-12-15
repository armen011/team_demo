import { useContext } from "react"
import { SocketContext } from "./Provider"

export const useSocket=()=>{
    const socket=useContext(SocketContext);
    const listen=<T>(chanel:string,cb:(data:T)=>void)=>{
        socket?.on(chanel,cb);
    }
    const send=<T>(chanel:string,data:T)=>{
        socket?.emit(chanel,data);
    }
    return {listen,send}
}