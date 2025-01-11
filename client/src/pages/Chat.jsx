import Applayout from "../components/layout/Applayout";
import { Fragment, useRef } from "react";
import { IconButton, Stack } from "@mui/material";
import { InputBox } from "../components/styles/StyledComponent";
import { Send as SendIcon } from "@mui/icons-material";
import { AttachFile as AttachFileIcon } from "@mui/icons-material";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chat = () => {
  const containerRef = useRef(null);
  const user ={
    _id:"eqerwqrsff",
    name:"Vitya"
  }

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        spacomng={"1rem"}
        bgcolor={"rgba(0,0,0,0.1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessages.map((i) => (
            <MessageComponent key={i._id} message={i} user={user}/>    
          ))
        }

      </Stack>

      {/* Message Render */}
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "45deg",
            }}
      
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type a message" />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu  />
    </Fragment>
  );
};

export default Applayout()(Chat);
