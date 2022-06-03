import React from 'react';
import './css/Todo.css'
import TodoList from './components/TodoList';
import { ThemeProvider } from './components/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotFound from './NotFound/NotFound';
import Nav from './Navbar/Nav';
import Info from './components/Info';

const App = () => {
  return (
    <ThemeProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/todoapp' element={<TodoList />} />
        <Route path='/todo/:id' element={<Info />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
