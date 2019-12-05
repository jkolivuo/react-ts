import React, { useEffect } from 'react';
import '../styles/Page.css';
import TodoStore from '../stores/todoStore';
import ListItem from '../components/ListItem';
import { observer } from 'mobx-react';

const PageLayout = () => {
    const { todos } = TodoStore
    useEffect(() => {
        TodoStore.fetchTodos();
        
    }, []);

    return (
        <div className="pageLayout">
            <h3>Todo List</h3>
            <div className="todoList">
            {todos.map((todo) => <ListItem 
                title={todo.title} 
                checked={todo.isDone} 
                key={todo.id}
                onChange={() => todo.toggleTodo()}/>)}
        </div>
        </div>
    )
};


export default observer(PageLayout)