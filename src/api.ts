import urls from './endpoints';
import Todo from './models/Todo';

const Methods = {
    PUT: "PUT",
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

const fetchTodosFromApi = async () => {
    const res = await fetch(urls.TODOS.GET());
    const json = await res.json();
    return json;
}

const updateTodo = async (todo: Todo) => {
    console.log(todo);
    const res = await fetch(urls.TODOS.PUT(todo.id), {
        method: Methods.PUT,
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
           },
        body: JSON.stringify(todo)
    });
    const json = await res.json();
    return json;
}

export {
    fetchTodosFromApi,
    updateTodo
}