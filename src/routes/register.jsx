import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ id: 1, username: username ? username : "Ronald Paek" });
    navigate("/");
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1 className="auth-title">Register</h1>
        <fieldset className="auth-fieldset">
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
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
