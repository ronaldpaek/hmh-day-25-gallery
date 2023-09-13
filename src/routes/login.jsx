import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ id: 1, username: username ? username : "Ronald Paek" });
    navigate("/");
  };

  return (
    <main className="register-page">
      <form className="register-form" onSubmit={handleLogin}>
        <h1 className="register-title">Login</h1>
        <fieldset className="register-fieldset">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="username-input"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </main>
  );
};

export default Login;
