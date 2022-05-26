import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = ({ data, onAddTodo, onClickAllComplete }) => {

    const [text, setText] = useState('')

    const handleChane = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        const data = { text }
        event.preventDefault()
        onAddTodo(data)
        setText('')
    }

    const theme = useContext(ThemeContext)

    useEffect(() => {
        const body = document.getElementsByTagName("body");
        body[0].className = theme
    }, [theme])

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <code>todos</code>
            <div className="input-wrapper">
                <input className="toggle-all" type="hidden" />
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