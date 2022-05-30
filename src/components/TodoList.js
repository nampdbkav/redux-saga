import React, { useEffect, useState, useContext, Fragment } from 'react';
import { connect } from 'react-redux';

import { addListTodo, getListTodo, deleteListTodo, editListTodo, completeListTodo, clearCompleteListTodo, setShow, completeAllListTodo } from '../action/action';
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

const TodoList = ({ page, todosList, filter, getTodo, onAddTodo, onClickDelete, onClickEdit, onClickComplete, onClearComplete, onClickAllComplete }) => {
    const { todos, load } = todosList
    // const todo = filterItem(todos, filter);
    const [isLoad, setIsLoad] = useState(load);

    useEffect(() => {
        setTimeout(() => {
            getTodo()
            setIsLoad(!load)
        }, 2500)
    }, []);

    const { theme, setTheme } = useContext(ThemeContext);

    let countActive = [...todos].filter((todo) => !todo.complete).length;
    let clearComplete = [...todos].some(todo => todo.complete);

    return (
        <div className={theme}>
            <div className="slideOne" style={{ background: theme === 'light' ? '#FFCCD2' : '#F5F5F5' }}>
                <input type="checkbox" value="None" id="slideOne" name="check" onClick={setTheme} />
                <label style={{ background: theme === 'light' ? '#FF7BA9' : '#fff' }} htmlFor="slideOne"></label>
            </div>
            <Header
                onAddTodo={onAddTodo}
                onClickAllComplete={onClickAllComplete}
            />
            {isLoad ? (
                <Fragment>
                    <section className='main'>
                        <ul className='todo-list'>
                            {todos.map((todo, index) => {
                                let flag = false;
                                if (filter === setShow.SHOW_ALL ||
                                    (filter === setShow.SHOW_ACTIVE && !todo.complete) ||
                                    (filter === setShow.SHOW_COMPLETED && todo.complete)
                                ) {
                                    flag = true;
                                }
                                return flag ? (<TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    index={index}
                                    onClickDelete={() => onClickDelete(todo.id)}
                                    onClickEdit={onClickEdit}
                                    onClickComplete={onClickComplete}
                                />) : null;
                            })}
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
        onClearComplete: () => {
            dispatch(clearCompleteListTodo())
        },
        onClickAllComplete: () => {
            dispatch(completeAllListTodo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)