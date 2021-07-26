import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const demoNuevo = {
    id: 5,
    desc: "El colado",
    done: false,
  };

  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("no debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe de llamar handleAddTodo", () => {
    const value = "Texto de prueba";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    });

    // se ejecuto el efecto de llamar al reset, efecto que quede vacio
    expect(wrapper.find("input").prop("value")).toBe('');
  });
});
