import React, { useState } from "react";
import { Button, TextField, Card, CardContent } from "@mui/material";
import { useAuth } from "../hook/useAuth";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 8 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
