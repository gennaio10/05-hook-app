import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
import "@testing-library/jest-dom";

//simula la implementacion de un useFetch y un useCounter simulado como data de prueba
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Julian",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    // console.log(wrapper.html());

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Julian");
  });
});
