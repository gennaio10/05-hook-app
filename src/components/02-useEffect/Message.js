import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    console.log("Componente Message montado");

    const mouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Componente Message desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        X = {x} Y = {y}
      </p>
    </div>
  );
};
