import { Typography ,Box } from "@mui/material";
import Applayout from "../components/layout/Applayout";

const Home = () => {
  return (
    <Box bgcolor ={"rgba(168, 164, 164, 0.1)"} height={"100%"}>
      <Typography paddingTop={"2rem"} variant="h5" textAlign={"center"}>
      Select a friend to Chat
    </Typography>
    </Box>
  );
};

export default Applayout()(Home);
