
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/todos/todoList';
import TodoForm from './components/todos/todoForm';
import TodosActions from './components/todos/todosActions';

import './app.css';


const App = () => {

  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo =  {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
  
    setTodos([...todos,newTodo])
  }

  const deleteTodoHandler = (id) => {
    console.log(id)
    setTodos(todos.filter((todo) => 
      todo.id !== id))
    
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id
      ? {...todo, isCompleted: !todo.isCompleted}
      : {...todo}
    ))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  

    return (
        <div className="app">
        <h1>Todo app</h1>
        <TodoForm addTodo={addTodoHandler}/>
        {
          todos.length > 0 
          && <TodosActions 
            resetTodos={resetTodosHandler} 
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedTodosExist={!!completedTodosCount}
            />
        }
        <TodoList 
        todos={todos} 
        deleteTodo={deleteTodoHandler} 
        toggleTodo={toggleTodoHandler}

        />
        {completedTodosCount > 0 && <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
        </div>
      )
}




export default App;