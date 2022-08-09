import React from "react";
import PropTypes from 'prop-types'
import TodoItems from "../MyComponents/TodoItems";
// Calls TodoItems to display all the tasks 
export default function TodoItem(props) {
    return (

        <div className="container">
            <h3 className="TodoHeading">
                TODOs List
            </h3>
            {props.tasks.length === 0 ? "No todos to display" : ""}
            {props.tasks.map((item) => {
                return <TodoItems todo={item} key={item.sno} onDelete={props.onDelete} />
            })}

        </div>
    );
}
TodoItem.propTypes = {  
    tasks: PropTypes.array
};
