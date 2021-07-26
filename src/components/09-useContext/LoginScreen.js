import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const userLogged = {
    id: 10007,
    name: 'Julian Herrera'
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={()=>setUser(userLogged)}>
Login
      </button>
    </div>
  );
};
