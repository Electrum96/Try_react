import './todoBox.scss';
import Todo from "../todo/Todo";
import Input from "../../input/Input";

const TodoBox = function({todos, onDelete, addTodo}) {


    return <div className="todo-box">
        <Input addTodo={addTodo}/>
        {todos.map((todo) => <Todo onDelete={onDelete} key={todo.id} id={todo.id} title={todo.title}/>)}
        </div>

}

export default TodoBox;