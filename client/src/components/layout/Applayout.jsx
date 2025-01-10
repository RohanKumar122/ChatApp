import Header from "../layout/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        {/* First */}
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height="100%"
            bgcolor={""}
          >
            <ChatList/>
          </Grid>

          {/* Second */}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height="100%"
            bgcolor={""}
          >
            {" "}
            Second{" "}
          </Grid>

          {/* Third */}
          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" },
            padding:"2rem", 
            bgcolor:"rgba(0,0,0,0.85)"   
        }}
            height="100%"
            bgcolor={"primary.main"}
          >
            {" "}
            Third{" "}
          </Grid>
        </Grid>

        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Applayout;
