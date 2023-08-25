import React, { useState } from "react";
import "./input.scss";

const Input = function({addTodo}) {

    const [value, setValue] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        addTodo(value);
    }


    
    return <form className="input" onSubmit={handleSubmit} >
        <input value={value} type="text" className="input__text" placeholder="write something"  onChange={(e) => setValue(e.target.value)}/>
        <button  className="input__btn" type="submit" >Add</button>
    </form>
}
export default Input;