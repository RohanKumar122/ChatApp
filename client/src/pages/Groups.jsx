import {
  Grid,
  Tooltip,
  IconButton,
  Menu,
  Box,
  Drawer,
  Stack,
  Typography,
  TextField,
  Icon,
} from "@mui/material";
import {
  Add as AddIcon,
  KeyboardBackspace as ArrowBackIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { memo } from "react";
import { Link } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { SampleChats } from "../constants/sampleData";
import { Button } from "@mui/material";

const ConfirmDeleteDailog =lazy(() => import("../components/dialogs/ConfirmDeleteDailog"));

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDailog, setDeleteDailog] = useState(false);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const openConfirmDeletehandler = () => {
    setDeleteDailog(true);
  };
  const closeConfirmDeletehandler = () => {
    setDeleteDailog(false);
  };

  useEffect(() => {
    // const group = SampleChats.find((group) => group._id === chatId);
    setGroupName(`Group Name  ${chatId}`);
    setGroupNameUpdatedValue(`Group Name  ${chatId}`);
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  console.log(chatId);
  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            top: "1rem",
            right: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            bgcolor: "black",
            color: "white",
            ":hover": { bgcolor: "gray ", color: "white" },
          }}
          onClick={() => handleBack()}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"1rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h5">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        xs: 0,
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button size="large" color="error" startIcon={<DeleteIcon />}
      onClick={openConfirmDeletehandler}
      >
        Delete Group
      </Button>
      <Button size="large" variant="contained" startIcon={<AddIcon />} 
      onClick={closeConfirmDeletehandler}>
        Add Memeber
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        sm={4}
        bgcolor={"#f5f5f5"}
      >
        <GroupList myGroups={SampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}

        {groupName && (
          <>
            {GroupName}

            <Typography
              margin={"2rem"}
              alignItems={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0.5rem",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              bgcolor={"rgba(168, 164, 164, 0.1)"}
              height={"50vh"}
              overflow={"auto"}
            >
              {/* Members */}
            </Stack>

            {ButtonGroup}
          </>
        )}
      </Grid>{" "}

        {confirmDeleteDailog && 
        <>hedthed</>}

      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"50vh"} myGroups={SampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w} direction="column" gap={"1rem"}>
    {myGroups.length > 0 ? (
      myGroups?.map((group, index) => (
        <GroupListItem key={index} group={group} chatId={chatId} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
