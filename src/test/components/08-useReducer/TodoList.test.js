import React from "react";
import "@testing-library/jest-dom";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";

describe("Pruebas en <TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener los elementos de demoTodos", () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
  });

  test("debe de tener la funcion handleDelete", () => {
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete'))
    .toEqual(expect.any(Function))
  });
});
