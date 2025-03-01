import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../mockApi/apiInstance";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Giả lập API login bằng cách gọi /users/1 từ JSONPlaceholder
      const response = await axiosInstance.get("/users/1");
      console.log("Mock API Response:", response.data);
      alert("Đăng nhập thành công!");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Đăng nhập thất bại!");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Đăng Nhập
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Đăng Nhập
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
