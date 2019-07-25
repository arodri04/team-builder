import React, {useState}from "react";

const Form = props => {
    var idnum=0;
    const[input, setInput] = useState({name:"", id:null})
    const inputHandler = e => {
        setInput({...input, [e.target.name]: e.target.value});
    }
    const submit = e => {
        e.preventDefault();
        idnum +=1;
        props.newMember({...input, id: idnum});
        setInput({name:"", id:null})
    }
    return(
        <div>
            <form onSubmit={submit}>
                <input placeholder="name" name="name" value={input.name} onChange={inputHandler}/>
                <button>Add</button>
            </form>
        </div>
    )


}

export default Form;