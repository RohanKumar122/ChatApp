import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useInputValidation,useFileHandler } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);

  const toggleLogin = () => setisLogin((prev) => !prev);
  const handleSignUp = () => {};
  const handleLogIn = (e) => {
    e.preventDefault();
  };

  const name = useInputValidation();
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation();
  const avatar = useFileHandler("single", 2);

  return (
    <div style={{backgroundImage:"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1"}}>

      
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
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={handleLogIn}
            >
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
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
                Login
              </Button>

              <Typography sx={{ marginTop: "1rem" }} flex={1} align="center">
                OR
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Signup </Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"} 
              onSubmit={handleSignUp}
              >
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}

                  src = {avatar.preview}
                />

                

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      backgroundColor: "rgba(0,0,0,0.8)",
                    },
                    color: "white",
                  }}
                  component={"label"}
                >
                  <>
                    <CameraAltIcon />

                    <VisuallyHiddenInput type="file"  onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              {
                  avatar.error && (
                    <Typography margin={"1rem"} display={"block"} align="center" color={"error"} variant="caption">
                      {avatar.error}
                    </Typography>
                  )
                }

              <TextField
                required
                fullWidth
                label="name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color={"error"} variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

{/* {password.error && (
                <Typography color={"error"} variant="caption">
                  {password.error}
                </Typography>
              )} */}

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                SignUp
              </Button>

              <Typography sx={{ marginTop: "1rem" }} flex={1} align="center">
                OR
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
