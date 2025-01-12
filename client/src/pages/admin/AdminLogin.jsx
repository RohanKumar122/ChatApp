import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

const isAdmin = true;
const AdminLogin = () => {
  const secreatKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {
            <>
              <Typography variant="h5">Admin Panel</Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  fullWidth
                  label="Access Key required"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={secreatKey.value}
                  onChange={secreatKey.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Validate Access
                </Button>
              </form>
            </>
          }
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
