import React from "react";

const TodoItem = ({ todo, index, onClickDelete, onClickComplete }) => {

    return (
        <li>
            <div className="first" style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                <input type='checkbox'
                    checked={todo.complete}
                    onChange={() => onClickComplete(todo.id)}
                />
                <div className="double">
                    {(index + 1) + ' : ' + todo.text}
                </div>
            </div>
            <button >Edit</button>
            <button onClick={onClickDelete}>Delete</button>
        </li>
    )

}

export default TodoItem