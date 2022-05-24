import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListTodo } from "../actions/action";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, getListTodo }) => {
    console.log('...', todos);
    useEffect(() => {
        getListTodo()
    }, [])

    return (
        <div>
            <section className='main'>
                <ul className='todo-list'>
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            // // onClick={() => toggle(todo.id)}
                            // onDel={onDel}
                            // onEdit={onEdit}
                            index={index}
                            todo={todo}
                        // isLoading={isLoading}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListTodo: () => dispatch(getListTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)