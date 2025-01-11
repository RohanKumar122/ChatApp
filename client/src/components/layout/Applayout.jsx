import Header from "../layout/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams()
    const chatId =params.chatId;   // not working
    console.log(chatId);

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat",_id, groupChat);
    };

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
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
             
            />
          </Grid>

          {/* Second */}
          <Grid item xs={12} sm={8} md={5} lg={6} height="100%" bgcolor={""}>
            <WrappedComponent {...props} />
          </Grid>

          {/* Third */}
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height="100%"
            bgcolor={"primary.main"}
          >
            {" "}
            <Profile/>
          </Grid>
        </Grid>

        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Applayout;
