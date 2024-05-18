import { createNewTodo, toggleTodo } from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/todo";

import * as functions from "../ts/functions";
import * as htmlFunctions from "./../ts/htmlFunctions";
    

describe("main tests", () => {
    let mockedAddTodo: jest.SpyInstance<IAddResponse>;
    let mockedCreateHtml: jest.SpyInstance<void>;
    let mockedDisplayError: jest.SpyInstance<void>;
    let mockedChangeTodo: jest.SpyInstance<void>;

    beforeEach(() => {
        mockedAddTodo = jest.spyOn(functions, "addTodo");
        mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
        mockedDisplayError = jest.spyOn(htmlFunctions, "displayError");
        mockedChangeTodo = jest.spyOn(functions, "changeTodo");
        document.body.innerHTML = `
        <form id="newTodoForm">
        <div>
          <input type="text" id="newTodoText" />
          <button>Skapa</button>
          <button type="button" id="clearTodos">Rensa lista</button>
        </div>
        <div id="error" class="error"></div>
      </form>
      <ul id="todos" class="todo"></ul>`
    });
    afterEach(() => {
        mockedAddTodo.mockReset();
        mockedCreateHtml.mockReset();
        mockedDisplayError.mockReset();
        mockedAddTodo.mockReset();
    })

    test("it should add a todo and call createHtml", () => {
        const todoText = "Lorem";
        const todos: Todo[] = [];
        mockedAddTodo.mockImplementation(() => {
            return { success: true, error: ""}  // result i koden
        });
        mockedCreateHtml.mockImplementation(() => {});

        createNewTodo(todoText, todos);

        expect(mockedCreateHtml).toHaveBeenCalled();


    });
    test("it should display error", () => {
        const todoText = "Om";
        const todos: Todo[] = [];
        mockedAddTodo.mockImplementation(() => {
            return { success: false, error: ""}  // result i koden
        });
        mockedDisplayError.mockImplementation(() => {});

        createNewTodo(todoText, todos);

        expect(mockedDisplayError).toHaveBeenCalled();


    });
    test("it should toggle status", () => {
        const todo = { text: "Test Todo", done: false };
        mockedChangeTodo.mockImplementation((todo: Todo) => {
            todo.done = !todo.done;
        });
        mockedCreateHtml.mockImplementation(() => {});

        toggleTodo(todo);
        
        expect(mockedChangeTodo).toHaveBeenCalledWith(todo);
        expect(mockedCreateHtml).toHaveBeenCalled();
        expect(todo.done).toBe(true);
    });
    test("it should toggle back", () => {
        const todo = { text: "Test Todo", done: true };

        mockedChangeTodo.mockImplementation((todo: Todo) => {
            todo.done = !todo.done;
        });
        mockedCreateHtml.mockImplementation(() => {});

        toggleTodo(todo);

        expect(mockedChangeTodo).toHaveBeenCalledWith(todo);
        expect(mockedCreateHtml).toHaveBeenCalled();
        expect(todo.done).toBe(false);
    });

});