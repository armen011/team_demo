import React , { ChangeEvent, FC } from "react"
import "./SelectDate.css"


type SelectDateProps = {
    array: string[] 
    handleChange:(e:ChangeEvent<HTMLSelectElement>)=>void,
    value:string|number
}


const SelectDate:FC<SelectDateProps>= ({ array , handleChange , value}) =>{
    
    return (
        <>
            <select name="" id="" onChange={handleChange} value={value}>
                {array.map((item:number|string)=><option key={Math.random()}>{item}</option>)}
            </select>
        
        </>
    )
}


export default SelectDate