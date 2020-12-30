import React from 'react';
import { Todo } from '../Todo.model';

interface TodoListProps{
    item : Todo[];
    deleteHandler : (id : string) => void;
}

const TodoList : React.FC<TodoListProps> = props=> {
    return (
        <ul>
            {
                props.item.map( todo =>{
                        return (
                        <li key={todo.id}> 
                            <span>{todo.text}</span>
                            <button onClick={props.deleteHandler.bind(null, todo.id)}>delete</button>
                        </li>
                        );
                    }
                )
            }
        </ul>
    )
};

export default TodoList;