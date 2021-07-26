import "@testing-library/jest-dom";
import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas de useCounter)", () => {
  test("debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  }); 

  test("debe de retornar el valor inicialial enviado", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test("debe de incrementar en uno", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(initialValue + 1);
  });

  test("debe de decrementar en uno", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement } = result.current;

    act(() => {
        decrement();
    });

    expect(result.current.counter).toBe(initialValue - 1);
  });

  test("debe de decrementar en uno", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement, reset } = result.current;

    act(() => {
        decrement();
        reset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});
