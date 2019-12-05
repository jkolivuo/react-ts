import { types, flow } from 'mobx-state-tree';
import TodoModel from '../models/Todo';

import { fetchTodosFromApi, updateTodo } from '../api';

export const Todo = types.model('Todo', {
    id: types.string,
    title: types.string,
    isDone: false
})
.actions(self => ({
    toggleTodo: flow(function* toggleTodo() {
        try {
            self.isDone = !self.isDone;
            const res = yield updateTodo(self);
            console.log(res);
        } catch (e) {
            console.error(e);
            console.error('Failed to update todo');
        }
    })
}));

const TodoStore = types.model('Todos', {
    todos: types.array(Todo),
    state: types.enumeration("State", ["pending", "done", "error"])
})
.views(self => ({
    get getTodos() {
        return self.todos
    },
    get getUnDoneTodos() {
        return self.todos.filter(todo => !todo.isDone)
    }
}))
.actions(self => ({
    addTodo(todo: TodoModel) {
        self.todos.push(todo);
    },
    removeTodo(id: string) {
        self.todos.filter(t => t.id !== id);
    },
    fetchTodos: flow(function* fetchTodos() {
        self.state = "pending";
        try {
            self.todos = yield fetchTodosFromApi();
            self.state = "done";
        } catch (e) {
            console.error(e);
            console.error('Failed to fetch todos');
            self.state = "error";
        }
    }),
    updateSingleTodo: flow(function* updateSingleTodo() {
        try {
            const res = yield updateTodo({id: "1", title: "Todo", isDone: false});
            console.log(res);
        } catch(e) {
            console.error(e);
        }
    })
}))
.create({
    todos: [],
    state: "pending"
});

export default TodoStore;

