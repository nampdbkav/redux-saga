import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, index, onClickDelete, onClickEdit, onClickComplete }) => {

    const [text, setText] = useState(todo.text)
    const [complete, setComplete] = useState(!todo.complete)
    const [open, setOpen] = useState(false)

    const handleEnter = (event) => {
        const data = { id: todo.id, text }
        if (event.key === 'Enter') {
            onClickEdit(data)
            setOpen(!open)
        }
    }

    const handleClick = () => {
        const data = { id: todo.id, complete }
        onClickComplete(data)
        setComplete(!complete)
    }

    const handleEdit = () => {
        setOpen(true)
    }

    return (
        <li>
            <div className='first' style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                <input type='checkbox'
                    checked={todo.complete}
                    onClick={handleClick}
                    onChange={() => { }}
                />
                <div className='double'>
                    {open ? (
                        <input className='input-edit'
                            value={text}
                            onKeyDown={handleEnter}
                            type='text'
                            autoFocus
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                        />
                    ) : ((index + 1) + ' : ' + todo.text)}
                </div>
            </div>
            <Link to={`/todo/${todo.id}`}>
                <button>Info</button>
            </Link>
            <button onClick={handleEdit} >Edit</button>
            <button onClick={onClickDelete}>Delete</button>
        </li >
    )

}

export default TodoItem