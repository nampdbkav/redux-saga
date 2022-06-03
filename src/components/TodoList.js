import React, { useEffect, useState, useContext, Fragment } from 'react';
import { connect } from 'react-redux';

import { addListTodo, getListTodo, deleteListTodo, editListTodo, completeListTodo, clearCompleteListTodo, completeAllListTodo } from '../action/action';
import { ThemeContext } from './ThemeContext';
import Header from './Header';
import TodoItem from './TodoItem'
import Footer from './Footer';
import { filterTodo } from '../selector';


const TodoList = ({ filterTodos, getTodo, onAddTodo, onClickDelete, onClickEdit, onClickComplete, onClearComplete, onClickAllComplete }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getTodo()
            setIsLoad(!isLoad)
        }, 2000)
    }, []);

    useEffect(() => {
        const type = {
            id: 'id'
        }
        const sorted = [...filterTodos].sort((a, b) => b[type.id] - a[type.id])
        setData(sorted)
    }, [filterTodos])

    const { theme, setTheme } = useContext(ThemeContext);

    let countActive = [...filterTodos].filter((todo) => !todo.complete).length;
    let clearComplete = [...filterTodos].some(todo => todo.complete);

    return (
        <div className={theme}>
            <div className="slideOne" style={{ background: theme === 'light' ? '#A760FF' : '#F5F5F5' }}>
                <input type="checkbox" value="None" id="slideOne" name="check" onClick={setTheme} />
                <label style={{ background: theme === 'light' ? '#5B4B8A' : '#fff' }} htmlFor="slideOne"></label>
            </div>
            <Header
                onAddTodo={onAddTodo}
                onClickAllComplete={onClickAllComplete}
                todos={filterTodos}
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
                        todos={filterTodos}
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
        // todosList: state.todoList,
        // filter: state.filter
        filterTodos: filterTodo(state)
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
        onClearComplete: () => {
            dispatch(clearCompleteListTodo())
        },
        onClickAllComplete: () => {
            dispatch(completeAllListTodo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)