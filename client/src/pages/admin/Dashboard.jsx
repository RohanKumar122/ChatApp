import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Group as GroupIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyledComponent";
import { LineChart } from "../../components/specific/Charts";
import { DoughnutChart } from "../../components/specific/Charts";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "3rem",
          }}
        />

        <SearchField placeholder="Search..." />

        <CurveButton
          sx={{
            bgcolor: "black",
            color: "white",
            ":hover": { bgcolor: "gray-200", color: "black" },
          }}
        >
          Search
        </CurveButton>

        <Box flexGrow={1} />

        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgb(0, 0, 0, 0.7)"}
          textAlign={"center"}
        >
          {moment().format("dddd, D MMMM YYYY")}
        </Typography>

        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={34} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={34} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container>
        {Appbar}

        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
     
          flexWrap={"wrap"}
          justifyContent={{
            xs: "center",
            lg: "stretch",
          }}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          sx={{gap: "2rem"}}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              maxWidth: "45rem",
              borderRadius: "1rem",
              width: "100%",
            }}
          >
            <Typography variant="h4" margin={"2rem 0"}>
              Last Messages
            </Typography>
            {/*            <LineChart /> */}

            <LineChart value={[23, 56, 33, 67, 33, 2]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              maxWidth: "25rem",
              position: "relative",
              height: "25rem",
            }}
          >
            {/* Doughnut */}
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[23, 66]}
            />

            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgb(0, 0, 0, 0.7)",
          borderRadius: "50%",
          border: `5px solid rgb(0, 0, 0, 0.7)`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
