import React from "react";
import { Stack } from "@mui/material";
// import Chat from "../../pages/Chat";
import ChatItems from "../shared/ChatItems";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId:"",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction="column"
    overflow={"auto"} height={"100%"}
    sx={{
      bgcolor: "rgba(250, 250, 255, 0.1)"
    }}
    >
      {chats?.map((data, index) => {
        
        const { avatar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({chatId}) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItems
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            key={_id}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
