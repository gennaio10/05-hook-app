import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Pruebas en <LoginScreen />", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").simulate("click");

    expect(setUser).toHaveBeenCalled();

    expect(setUser).toHaveBeenCalledTimes(1);

    expect(setUser).toHaveBeenCalledWith({
      id: 10007,
      name: "Julian Herrera",
    });

    // expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });
});
