import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un nuevo TODO", () => {
    const demoNuevo = {
      id: 5,
      desc: "El colado",
      done: false,
    };

    const action = {
      type: "add",
      payload: demoNuevo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, demoNuevo]);
    expect(state.length).toBe(demoTodos.length + 1);
  });

  test("debe de borrar un TODO", () => {
    const todoId = 1;

    const action = {
      type: "delete",
      payload: todoId,
    };

    const state = todoReducer(demoTodos, action);
    expect(state).toEqual(demoTodos.filter((todo) => todo.id !== todoId));
    expect(state.length).toBe(demoTodos.length - 1);
  });

  test("debe de hacer el toggle de un TODO", () => {
    const todoId = 1;

    const action = {
      type: "toggle",
      payload: todoId,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.find((todo) => todo.id === todoId).done).toBe(
      !demoTodos.find((todo) => todo.id === todoId).done
    );

    expect(state.length).toBe(demoTodos.length);
  });
});
