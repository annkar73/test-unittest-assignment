import { removeAllTodos } from "../ts/functions";
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

});