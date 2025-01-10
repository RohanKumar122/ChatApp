import Header from "../layout/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
       <Grid item xs ={4} height="100%" bgcolor={"primary.main"}>First   </Grid>
       <Grid item xs ={4} height="100%" bgcolor={"secondary.main"}>  Second </Grid>
       <Grid item xs ={4} height="100%" bgcolor={"primary.main"}>  Third </Grid>

        </Grid>

        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Applayout;
