import React, {useRef} from 'react';

interface NewTodoProps {
    addTodo : (todo : string)=>void;
}

const NewTodo : React.FC<NewTodoProps> = (props)=>{
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event : React.FormEvent) =>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.addTodo(enteredText);
    }

    return (<div>

        <form onSubmit={submitHandler}>
            <label htmlFor="input-text">Todo : </label>
            <input type="text" key="input-text" ref={textInputRef}/>
            <button type="submit" key="submit">Save!</button>
        </form>

    </div>);
};

export default NewTodo;