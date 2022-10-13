
import Todo from '../todos/todo';

import styles from './todoList.module.css';

const TodoList = (props) => {

    const {todos, deleteTodo, toggleTodo} = props;

    return (
        <div className={styles.todoFormContainer}>
            {todos.length === 0 && <h2>Todo list is empty</h2>}
            {todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}  toggleTodo={toggleTodo}/>)}
        </div>
    )
}

export default TodoList;