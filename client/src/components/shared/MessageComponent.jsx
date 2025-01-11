import { collapseClasses, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { memo } from "react";
import { fileFormate } from "../../lib/features";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    // animate using framer motion 3:19
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "0.55rem",
        width: "fit-content",
        padding: "1rem",
        maxWidth: "60%",
        position: "relative",
        marginBottom: "1rem",
        marginInlineStart: sameSender ? "auto" : "0",
        marginInlineEnd: sameSender ? "0" : "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          You
        </Typography>
      )}
      {!sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}

      {content && (
        <Typography variant="body1" bgcolor={"white"}>
          {content}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormate(url);
          return (
            <Box key={index}>
              <a
                href=""
                target="_blank"
                download
                style={{ color: "black" }}
              >
                {ReanderAttachment(file, url)}

              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
