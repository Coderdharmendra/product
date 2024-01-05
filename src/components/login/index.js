import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username || "kminchelle",
        password: user.password || "0lelplR",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <div>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button onClick={() => handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
