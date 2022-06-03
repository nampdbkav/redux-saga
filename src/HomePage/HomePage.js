import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getListTodo } from '../action/action';
import { filterTodo } from '../selector';

const HomePage = ({ todos, getTodo }) => {
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <div style={{ margin: '36px auto 0 auto', maxWidth: '80%' }}>
            <table>
                <tbody>
                    <tr style={{ backgroundColor: '#7858A6', color: 'white' }}>
                        <th>Index</th>
                        <th>Text</th>
                        <th>Complete</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={todo.id} >
                            <th>{index + 1}</th>
                            <th>{todo.text}</th>
                            <th>{todo.complete.toString()}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};


const mapStateToProps = (state) => {
    return {
        todos: filterTodo(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: (params) => {
            dispatch(getListTodo(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);