import { removeAllTodos, changeTodo } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("functions functions", () => {
    test("should remove all the todos from array", () => {
        const todos: Todo[] = [
            { text: "Todo 1", done: false },
            { text: "Todo 2", done: true },
        ];
        removeAllTodos(todos);

        expect(todos.length).toBe(0);
    });
    test("should do nothing if array is empty", () => {
        const todos: Todo[] = [];

        removeAllTodos(todos);

        expect(todos.length).toBe(0);
    });
    test("should change status from false to true", () => {
        const todo: Todo = { text: "test Todo", done: false };

        changeTodo(todo);

        expect(todo.done).toBe(true);
    });
    test("should change status from true to false", () => {
        const todo: Todo = { text: "test Todo", done: true };

        changeTodo(todo);
        expect(todo.done).toBe(false);
    });

});