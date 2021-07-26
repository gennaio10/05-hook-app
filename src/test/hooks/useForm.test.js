import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas de useForm)", () => {
  const initialForm = {
    name: "Julian",
    email: "julian@gmail.com",
  };

  test(" debe mostrar el componenete correctamente", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test(" debe de cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    const newValue = "Pororo"
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialForm, name:`${newValue}`});
  });

  test(" debe de cambiar el valor del formulario al valor inicial", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    const newValue = "Pororo"
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });

      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
