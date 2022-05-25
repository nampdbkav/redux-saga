import React, { useEffect, useState, useContext, Fragment } from "react";
import { connect } from "react-redux";

import { addListTodo, getListTodo, deleteListTodo, completeListTodo } from "../action/action";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import TodoItem from "./TodoItem"
import Footer from "./Footer";


const TodoList = ({ todosList, getTodo, onAddTodo, onClickDelete, onClickComplete }) => {

    const { todos, load } = todosList
    const [isLoad, setIsLoad] = useState(load)
    const [data, setData] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        //     getTodo()
        //     setIsLoad(!load)
        // }, 1000)
        getTodo()
        setIsLoad(!load)
    }, [])

    useEffect(() => {
        const types = {
            id: 'id'
        }
        const sorted = [...todos].sort((a, b) => b[types.id] - a[types.id])
        console.log('...', sorted);
        setData(sorted)
    }, [todos])

    const theme = useContext(ThemeContext)

    let countActive = [...todos].filter((todo) => !todo.complete).length

    return (
        <div className={theme}>
            <Header
                onAddTodo={onAddTodo}
                todos={todos}
            />
            {isLoad ? (
                <Fragment>
                    <section className="main">
                        <ul className="todo-list">
                            {data.map((todo, index) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    index={index}
                                    onClickDelete={() => onClickDelete(todo.id)}
                                    onClickComplete={() => onClickComplete(todo.id)}
                                />
                            ))}
                        </ul>
                    </section>
                    <Footer
                        countActive={countActive}
                    />
                </Fragment>
            ) : (
                <div className="image">
                    <img src="https://i.imgur.com/ZZvau7l.gif" />
                </div>)}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todosList: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: (params) => {
            dispatch(getListTodo(params))
        },
        onAddTodo: (params) => {
            dispatch(addListTodo(params))
        },
        onClickDelete: (id) => {
            dispatch(deleteListTodo(id))
        },
        onClickComplete: (id) => {
            dispatch(completeListTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)