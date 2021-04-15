import React from "react";
import { useHistory } from "react-router";

function Login(props: Object) {
  const history = useHistory();

  const submit = async () => {
    localStorage.setItem("accessToken", "test");
    history.push("/");
  };

  return (
    <div>
      <button onClick={submit}>login</button>
    </div>
  );
}

export default Login;
