import React from "react";
import "@testing-library/jest-dom";
import { HookApp } from "../HookApp";
import { shallow } from "enzyme";

describe("Pruebas de <HookApp />)", () => {

  test(" debe mostrar el componenete correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  }); 

});
