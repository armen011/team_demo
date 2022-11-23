import  { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'
import './TextInput.css'

export type TextInputProps={
    placeholder?:string
    error?:string
    value:string
    onChange:(value:string)=>void
    type?:HTMLInputTypeAttribute
}

const TextInput:FC<TextInputProps> = ({placeholder,error,value,onChange,type='text'}) => {

    const handleInputChange:ChangeEventHandler<HTMLInputElement>=({target:{value}})=>{
        onChange(value)
    }

  return (
    <div className='text_input_wrapper'>
      <input onChange={handleInputChange} placeholder={placeholder} value={value} type={type}/>
        {error&&<p className='error_text'>{error}</p>}
    </div>
  )
}

export default TextInput
