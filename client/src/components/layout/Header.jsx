import { orange } from "../../constants/color";
import React, { lazy } from "react";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
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

      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupDialog />
        </Suspense>
      )}
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
