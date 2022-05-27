import React, { useEffect, useState, useContext, Fragment } from 'react';
import { connect } from 'react-redux';

import { addListTodo, getListTodo, deleteListTodo, editListTodo, completeListTodo, completeAllListTodo, clearCompleteListTodo, setShow } from '../action/action';
import { ThemeContext } from './ThemeContext';
import Header from './Header';
import TodoItem from './TodoItem'
import Footer from './Footer';


const filterItem = (items, filter) => {
    switch (filter) {
        case setShow.SHOW_ALL:
            return items
        case setShow.SHOW_ACTIVE:
            return items.filter(t => !t.complete)
        case setShow.SHOW_COMPLETED:
            return items.filter(t => t.complete)
        default:
            return items
    }
}

const TodoList = ({ todosList, filter, getTodo, onAddTodo, onClickDelete, onClickEdit, onClickComplete, onClickAllComplete, onClearComplete }) => {

    const { todos, load } = todosList
    const todo = filterItem(todos, filter)
    const [isLoad, setIsLoad] = useState(load)
    const [data, setData] = useState(todo);


    useEffect(() => {
        setTimeout(() => {
            getTodo()
            setIsLoad(!load)
        }, 2500)
        // getTodo()
        // setIsLoad(!load)
    }, [])

    useEffect(() => {
        const types = {
            id: 'id'
        }
        const sorted = [...todo].sort((a, b) => b[types.id] - a[types.id])
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
                onClickAllComplete={onClickAllComplete}
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
                    <img src='https://i.imgur.com/fYDP8HP.gif' alt='Loading' />
                </div>)}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todosList: state.todos,
        filter: state.filter
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
        onClickAllComplete: () => {
            dispatch(completeAllListTodo())
        },
        onClearComplete: () => {
            dispatch(clearCompleteListTodo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)