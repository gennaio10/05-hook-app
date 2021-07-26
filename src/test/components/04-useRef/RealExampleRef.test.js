import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import "@testing-library/jest-dom";

describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
    })

    test('debe de no mostrar componente <MultipleCustomHooks />', () => {
        wrapper.find("button").simulate('click')
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    })
    
})
