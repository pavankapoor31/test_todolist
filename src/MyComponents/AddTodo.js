import React from "react";
import { useState } from "react";
export default function AddTodo(props) {

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Error, setError] = useState([
        {
            blankTitle: "",
            numericTitle: "",
            invalidChar: ""
        }
    ]);
    let Errors = {
        blankTitle: "",
        numericTitle: "",
        invalidChar: ""
    };
    let flag=0;
    // const [ Date,setDate] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        let letters = /^[A-Za-z1-9' '\'/-]+$/;
        //Checks if given desc is empty
        if (!Desc || !Title) {
            flag=1;
            Errors.blankTitle = "Title/desc Cannot be blank :)";
            // alert("Title/Description cannot be blank");
        }
        //Checks if given title is only numbers 
        else if (!isNaN(Title)) {
            flag=1;
            Errors.numericTitle = "Title Cannot be Numeric :)";
            // alert("Title cannot be numeric");
        }
        //Checks if given input has invalid characters 
        else if (!Title.match(letters)) {
            flag=1;
            // alert("Invalid characters");
            Errors.invalidChar = "Invalid Characters used :)";
        }
        if(Errors) setError(Errors); //Assigning errors if any 


        //After checks insertion is done (using usestate) below
        if(flag==0) {
        {
            const tempTitle = Title[0].toUpperCase() + Title.slice(1, Title.length);
            const tempDesc = Desc[0].toUpperCase() + Desc.slice(1, Desc.length);
            props.addTodo(tempTitle, tempDesc, props.todo_date);
            setTitle('');
            setDesc('');
        }
    }
}
return (
    <div className="AddTodos">
        <form action="">
            <label htmlFor="todoTitle"> <h3> Title : </h3></label>
            <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} id="todoTitle" name="todoTitle" />
            <h4 className="addTodoError"> {Error.numericTitle}</h4>
            <label htmlFor="todoDesc"> <h3>Description : </h3> </label>
            <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} id="todoDesc" name="todoDesc" />
            <br />
            <h4 className="addTodoError"> {Error.blankTitle}</h4>
            <h4 className="addTodoError"> {Error.invalidChar}</h4>
            <button className="btn btn-green" type="submit" onClick={onSubmit}> Add TODO</button>
        </form>
    </div>
)
}