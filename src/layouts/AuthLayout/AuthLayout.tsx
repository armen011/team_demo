import { FC, ReactElement } from "react"

  
  export type AuthLayoutProps={
    children:ReactElement
}

  
  const AuthLayout:FC<AuthLayoutProps>=({children})=>{
    return <div>{children}</div>
  }

  export default AuthLayout