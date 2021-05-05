import { Button } from '@material-ui/core';
import React, {useState} from 'react'
import { Input } from '@material-ui/core';
import "./Input.css"


const InputFuntion = (props) => {
const [inputValue, setInput] = useState("")
function handleChange(e) {
 setInput(e.target.value);   
}
return (
        <div className = "container">
            <Input style = {{color : "white"}} className= "form" value = {inputValue} onChange={handleChange}></Input>
            <Button variant="outlined" color="primary" onClick = {()=>props.handleClick(inputValue)}>
  Add List
</Button>
        </div>
    )
}

export default InputFuntion
