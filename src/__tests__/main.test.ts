import { createNewTodo } from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/todo";

import * as functions from "../ts/functions";
import * as htmlFunctions from "./../ts/htmlFunctions";
    

describe("main tests", () => {
    let mockedAddTodo: jest.SpyInstance<IAddResponse>;
    let mockedCreateHtml: jest.SpyInstance<void>;
    let mockedDisplayError: jest.SpyInstance<void>

    beforeEach(() => {
        mockedAddTodo = jest.spyOn(functions, "addTodo");
        mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
        mockedDisplayError = jest.spyOn(htmlFunctions, "displayError");
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

});