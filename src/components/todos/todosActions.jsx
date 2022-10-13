
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/button';

import styles from './todosActions.module.css';

const TodosActions = ({resetTodos, deleteCompletedTodos, completedTodosExist}) => {

    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reser Todos" onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
       
    )
}

export default TodosActions;