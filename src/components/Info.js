import React from 'react';
import { connect } from 'react-redux';
import { filterTodo } from '../selector';
import { useParams } from 'react-router-dom';

const Info = ({ todos }) => {
    const params = useParams()
    console.log(params);
    const todo = todos.find(todo => todo.id === params.id)
    return (
        <div>
            <h2 style={{ padding: '1rem' }}>
                Todo {todo.id} for {todo.text}
            </h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: filterTodo(state)
    }
}

export default connect(mapStateToProps)(Info);