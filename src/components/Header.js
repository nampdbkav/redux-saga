import React, { useState } from "react";

import { useContext } from "react";
import todos from "../reducer/saga";
import { ThemeContext } from "./ThemeContext";

const Header = ({ onAddTodo, onClickAllComplete, todos }) => {
    const [text, setText] = useState('');
    const { theme } = useContext(ThemeContext);

    const handleChane = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        const data = { text }
        event.preventDefault()
        onAddTodo(data)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <code className={theme}>todos</code>
            <div className="input-wrapper">
                {todos.length > 0 && (<input className="toggle-all" type="hidden" />)}

                <label
                    htmlFor="toggle-all"
                    onClick={onClickAllComplete}
                ></label>
                <input className='new-todo'
                    style={{ background: theme === 'dark' ? '#FF7BA9' : '#fff' }}
                    name="text"
                    placeholder="What need to be done?"
                    value={text}
                    onChange={handleChane}
                    autoFocus
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSubmit(event);
                        }
                    }}
                />
            </div>
        </form>
    )

}

export default Header