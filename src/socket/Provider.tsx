import { useAppSelector } from "app";
import { createContext,FC,ReactElement,useState,useEffect } from "react";
import { io,Socket } from 'socket.io-client';

export type ProviderProps={
    children:ReactElement;
}

export const SocketContext=createContext<Socket | null>(null);

export const Provider:FC<ProviderProps> =({children})=>{

    const [socket,setSocket]=useState<Socket|null>(null);

    const userId=useAppSelector(state=>state.user._id);


    useEffect(()=>{
        if(userId){
            const socketIO=io('http://localhost:8800');
            socketIO.on('connected',()=>{
            console.log("USERID",userId)
                socketIO.emit('setUserId',{userId})
                setSocket(socketIO)
              })
        }
    },[userId])    

    return <SocketContext.Provider value={socket}>
                 {children}
            </SocketContext.Provider>
}