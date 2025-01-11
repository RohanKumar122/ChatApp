import { orange } from "../../constants/color";
import React, { lazy } from "react";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Suspense } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Tooltip,
  Backdrop,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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

  // const navigateToGroup = () => navigate("/groups");
  const handleLogOut = () => {};

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: blue[600],
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
              <IconButton color="inherit" onClick={HandleMobile}>
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
                icon: <SearchIcon />,
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
                onClick={openNewGroup}
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
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
