import './todoBox.scss';
import Todo from "../todo/Todo";
import Form from '../../input/Form';

const TodoBox = function({todos, onDelete, addTodo, onCheckClick}) {
 

    return <div className="todo-box">
        <Form addTodo={addTodo}/>
        {todos.map((todo) => <Todo onDelete={onDelete} onCheckClick={onCheckClick} key={todo.id} id={todo.id} title={todo.title}/>)}
        </div>

}

export default TodoBox;