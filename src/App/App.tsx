import TextInput from 'components/TextInput'
import { useState } from 'react'
import UTILS from 'utils'
import './App.css'

export type RegistrationInputsType={
        email:string,
        username:string,
        password:string,
        isValid:boolean,
}



const App=()=>{

    

    const [inputValues,setInputValues]=useState<RegistrationInputsType>({
        email:"",
        username:"",
        password:"",
        isValid:false
    })


    const handleInputChange=(type:keyof typeof inputValues)=>(value:string)=>{
        if(type==='password'){
            setInputValues(prev=>{
                UTILS.Validations.emailValidation(value)
                return({...prev,[type]:value})}
                )
        }
    }

    console.log('inputValue', inputValues)

    return <div>
           <TextInput value={inputValues.email} onChange={handleInputChange('email')} error='hello'/>
           <TextInput value={inputValues.username} onChange={handleInputChange('username')}/>
           <TextInput value={inputValues.password} onChange={handleInputChange('password')}/>
            </div>
}

export default App