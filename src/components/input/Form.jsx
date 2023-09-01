import React, { useState } from "react";
import "./form.scss";

const Form = function({addTodo}) {

    const [value, setValue] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        addTodo(value);
        
    }

    return <form className="form" onSubmit={handleSubmit} >
        <input value={value} type="text" className="form__input" placeholder="сделайте запись" required onChange={(e) => setValue(e.target.value)}/>
        <button  className="form__btn" type="submit" > Add       
        </button>
    </form>
}
export default Form;