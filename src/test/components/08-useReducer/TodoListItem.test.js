import React from "react";
import "@testing-library/jest-dom";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";

describe("Pruebas en <TodoListItem />", () => {
  const todoId = 1;
  const index = 0;
  const todo = demoTodos.find((todo) => todo.id === todoId);
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      key={todo.id}
      todo={todo}
      index={index}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la funcion borrar", () => {
    wrapper.find("button").simulate("click");

    // Se espera se llame la funcion "handleDelete"
    expect(handleDelete).toHaveBeenCalled();

    // Se espera se halla llamado "handleDelete" solo una vez
    expect(handleDelete).toHaveBeenCalledTimes(1);

    // Se espera se llame la funcion "handleDelete" con un numero como parametro
    expect(handleDelete).toHaveBeenCalledWith(expect.any(Number));
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test("debe de llamar la funcion toogle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(expect.any(Number));
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test("debe de mostrar el texto correctament", () => {
    const valorEncontrado = wrapper.find("p").text().trim();
    expect(valorEncontrado).toBe(`${index + 1}. ${todo.desc}`);
  });

  test("debe de tener la clase complete si el done esta en true", () => {
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        key={todo.id}
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );

    //   console.log(wrapper.html());

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
