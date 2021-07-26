import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      <h1>Real Example Ref</h1>
      {state && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-5" onClick={()=>{setState(!state)}}>
          Show/Hide
      </button>
    </div>
  );
};
