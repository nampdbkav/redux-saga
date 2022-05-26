import React, { useEffect, useState, useContext, Fragment } from 'react';
import { connect } from 'react-redux';

import { addListTodo, getListTodo, deleteListTodo, editListTodo, completeListTodo, completeAllListTodo, clearCompleteListTodo } from '../action/action';
import { ThemeContext } from './ThemeContext';
import Header from './Header';
import TodoItem from './TodoItem'
import Footer from './Footer';


const TodoList = ({ todosList, getTodo, onAddTodo, onClickDelete, onClickEdit, onClickComplete, onClickAllComplete, onClearComplete }) => {

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
        setData(sorted)
    }, [todos])

    const theme = useContext(ThemeContext)

    let countActive = [...todos].filter((todo) => !todo.complete).length
    let clearComplete = [...todos].some(todo => todo.complete)

    return (
        <div className={theme}>
            <Header
                data={data}
                onAddTodo={onAddTodo}
                todos={todos}
                onClickAllComplete={() => onClickAllComplete()}
            />
            {isLoad ? (
                <Fragment>
                    <section className='main'>
                        <ul className='todo-list'>
                            {data.map((todo, index) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    index={index}
                                    onClickDelete={() => onClickDelete(todo.id)}
                                    onClickEdit={onClickEdit}
                                    onClickComplete={onClickComplete}
                                />
                            ))}
                        </ul>
                    </section>
                    <Footer
                        countActive={countActive}
                        clearComplete={clearComplete}
                        onClearComplete={onClearComplete}
                    />
                </Fragment>
            ) : (
                <div className='image'>
                    <img src='https://i.imgur.com/ZZvau7l.gif' alt='Loading' />
                </div>)}
        </div>
    )

}

const mapStateToProps = (state) => {
    console.log(state.todos)
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
        onClickEdit: (params) => {
            dispatch(editListTodo(params))
        },
        onClickComplete: (id) => {
            dispatch(completeListTodo(id))
        },
        onClickAllComplete: (params) => {
            dispatch(completeAllListTodo(params))
        },
        onClearComplete: () => {
            dispatch(clearCompleteListTodo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)