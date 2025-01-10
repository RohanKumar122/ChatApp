import { orange } from "../../constants/color";
import React from "react";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchDialog from "../specific/Search"
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SerachIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const [ismobile, setIsMobile] = useState(false);
  const [issearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const HandleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDailog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => navigate("/groups");
  const handleLogOut = () => {};

  return (
    <>
      <box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chatx
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onclick={HandleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>
              {IconBtn({
                title: "Search",
                icon: <SerachIcon />,
                onClick: openSearchDailog,
              })}

              {IconBtn({
                title: "New Group",
                icon: <AddIcon />,
                onClick: openNewGroup,
              })}

              <IconBtn
                title="Groups"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title="Notification"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title="logout"
                icon={<LogoutIcon />}
                onClick={handleLogOut}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </box>

        {/* {
          isSearch &&(
            <SearchDialog/>
          )
        } */}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onclick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
