import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../MyContextProvider";
import { TextInput, Button, Box } from "@mantine/core";
import { LoginPayload, AuthResponse } from "../../../types";

function Login() {
  const navigate = useNavigate();
  const { setToken } = useMyContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const payload: LoginPayload = {
        username,
        password,
        expiresInMins: 30, // optional, adjust as needed
      };

      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data: AuthResponse = await response.json();
      setToken(data.token); // Assign the token to context on successful login
      navigate("/"); // Redirect to home page or desired route after login
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Box
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <Button type="submit" variant="filled" color="blue" fullWidth>
          Login
        </Button>
      </form>
      {error && <p style={{ color: "red", marginTop: 15 }}>{error}</p>}
    </Box>
  );
}

export default Login;
