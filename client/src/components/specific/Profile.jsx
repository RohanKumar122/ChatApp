import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import  moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard heading={"Bio"} text={"I am a web developer"} />
      <ProfileCard
        heading={"Username"}
        text={"@rioinexc"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Abhay kumar"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment('2025-01-11T00:00:00.000Z').fromNow()} Icon={<CalenderIcon />} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color="white" variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
)

export default Profile;
