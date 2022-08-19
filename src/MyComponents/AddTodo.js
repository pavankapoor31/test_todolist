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
    let tempTitle,tempDesc;
    tempTitle=Title.trim();
    tempDesc=Desc.trim();
    let flag = 0;
    const validateTitle = (e) => {
        let letters = /^[A-Za-z0-9' '\'/-]+$/;
        //Checks if given title is empty
        if (tempTitle.length==0) {
            flag = 1;
            Errors.blankTitle = "Title Cannot be blank/Single digit :)";
            // alert("Title/Description cannot be blank/single digit");
        }
        else
        if (!tempTitle) {
            flag = 1;
            Errors.blankTitle = "Title/Desc Cannot be blank :)";
            // alert("Title/Description cannot be blank");
        }
        //Checks if given title is only numbers 
        // else
        
        //Checks if given input has invalid characters 
        else if (!tempTitle.match(letters)) {
            flag = 1;
            // alert("Invalid characters");
            Errors.numericTitle = "Invalid Characters used :)";
        }
        else  if (!isNaN(tempTitle)) {
            flag = 1;
            Errors.numericTitle = "Title Cannot be Numeric :)";
            // alert("Title cannot be numeric");
        }
        else flag=0;
        if (Errors) setError(Errors);
    }
    const validateDesc = (e) =>{
        if (!tempDesc) {
            flag = 1;
            Errors.blankTitle = "Description Cannot be blank :)";
            // alert("Title/Description cannot be blank");
        }
        else  if ((tempDesc.length>200)) {
            flag = 1;
            Errors.numericTitle = "Description limit : 200 characters";
            // alert("Title cannot be numeric");
        }
        else flag=0;
        if (Errors) setError(Errors); //Assigning errors if any 
    }
        const onSubmit = (e) => {
            e.preventDefault();
            validateTitle(e);
            validateDesc(e);
            //After checks insertion is done (using usestate) below
            if (flag == 0) {
                {
                    tempTitle = Title[0].toUpperCase() + Title.slice(1, Title.length);
                    tempDesc = Desc[0].toUpperCase() + Desc.slice(1, Desc.length);
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
                <input type="text" value={Title} onChange={(e) => { setTitle(e.target.value);validateTitle(e.target.value) }} id="todoTitle" name="todoTitle" />
                <h4 className="addTodoError"> {Error.numericTitle}</h4>
                <label htmlFor="todoDesc"> <h3>Description : </h3> </label>
                <textarea cols="30" rows="10" onChange={(e) => {setDesc(e.target.value);validateDesc(e.target.value)}} id="todoDesc" name="todoDesc" placeholder="Work on .....">
                {/* <input type="textarea"value={Desc} onChange={(e) => {setDesc(e.target.value);validateTitle(e.target.value)}} id="todoDesc" name="todoDesc" placeholder="Work on ....." /> */}
                </textarea>
                <br />
                <h4 className="addTodoError"> {Error.blankTitle}</h4>
                <h4 className="addTodoError"> {Error.invalidChar}</h4>
                <button className="btn btn-green" type="submit" onClick={onSubmit}> Add TODO</button>
            </form>
        </div>
    )
}