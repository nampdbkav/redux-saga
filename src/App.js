import React from 'react';
import './css/Todo.css'
import TodoList from './components/TodoList';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <TodoList />
    </ThemeProvider>
  )
}

export default App;
