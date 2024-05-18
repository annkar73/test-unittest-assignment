import { removeAllTodos, changeTodo, addTodo } from "../ts/functions";
import { Todo } from "../ts/models/todo";
import { IAddResponse } from "../ts/models/IAddResponse";

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
    test("should add a todo when text length is greater than 2", () => {
        const todos: Todo[] = [];
        const todoText = "Test Todo";

        const result: IAddResponse = addTodo(todoText, todos);

        expect(result).toEqual({ success: true, error: "" });
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(todoText);
        expect(todos[0].done).toBe(false);
    });
    test("should not add a todo when text length is 2 or less", () => {
        const todos: Todo[] = [];
        const todoText = "No";

        const result: IAddResponse = addTodo(todoText, todos);

        expect(result).toEqual({ success: false, error: "Du måste ange minst tre bokstäver" });
        expect(todos.length).toBe(0);
    });

});