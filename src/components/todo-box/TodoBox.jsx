import './todoBox.scss';
import Todo from "../todo/Todo";
import Form from '../input/Form';
import Filter from '../filter/Filter';
import Search from '../search/Search';

const TodoBox = function({todos, onDelete, addTodo, onCheckClick, onFilter, onSearch}) {
 

    return <div className="todo-box">
        <Form addTodo={addTodo}/>
        <div className='todo-box__wrapper'>
            <Filter onFilter={onFilter}/>
            <Search onSearch={onSearch}/>
        </div>
        {todos.map((todo) => <Todo onDelete={onDelete} onCheckClick={onCheckClick} key={todo.id} id={todo.id} title={todo.title}/>)}
        </div>

}

export default TodoBox;