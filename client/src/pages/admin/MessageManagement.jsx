import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { dashboardData } from "../../constants/sampleData";
import { useState } from "react";
import { useEffect } from "react";
import { transformImage } from "../../lib/features";
import moment from "moment";
import { Avatar, Stack } from "@mui/material";
import { fileFormate } from "../../lib/features";
import { Box } from "@mui/material";
import RenderAttachment  from "../../components/shared/RenderAttachment";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params.row;

      return attachments?.length > 0
        ? attachments.map((i) => {
            const url = i.url;
            const file = fileFormate(url);

            return (
              <Box margin={"1.2rem"}  >
                <a 
                  href={url}
                  download
                  target="_blank"
                  style={{
                    color: "black",
                  }}
                >

                { RenderAttachment(file, url) }
                </a>
              </Box>
            );
          })
        : "No attachments";
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Send By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chats",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupsChat",
    headerName: "Groups Chats",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];
const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50),
        },
        createdAt: moment(i.createdAt).format("dddd MMM, hh:mm A"),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  );
};

export default MessageManagement;
