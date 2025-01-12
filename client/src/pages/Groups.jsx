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
  Add,
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
import { Suspense } from "react";
import { Backdrop } from "@mui/material";
import UserItems from "../components/shared/UserItems";
import { sampleUsers } from "../constants/sampleData";
const ConfirmDeleteDailog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDailog")
);
const AddMemberDailog = lazy(() =>
  import("../components/dialogs/AddMemberDailog")
);

const isAddMember = false;
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

  const deleteHandler = () => {
    console.log("deleted");
    closeConfirmDeletehandler();
  };

  const removeMemberHandler = () => {
    
    console.log("removed");
  };

  useEffect(() => {
    // const group = SampleChats.find((group) => group._id === chatId);
    if (chatId) {
      setGroupName(`Group Name  ${chatId}`);
      setGroupNameUpdatedValue(`Group Name  ${chatId}`);
    }
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
      <Button
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeletehandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={closeConfirmDeletehandler}
      >
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
        bgcolor={"rgba(18, 34, 54, 0.1)"} 
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

              {sampleUsers.map((i) => (
                <UserItems
                  key={i._id}
                  user={i}
                  isAdded 
                  styling={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    padding: "1rem 2rem",
                    borderRadius: "10px",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>

            {ButtonGroup}
          </>
        )}
      </Grid>{" "}
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDailog />
        </Suspense>
      )}
      {confirmDeleteDailog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDailog
            open={confirmDeleteDailog}
            handleClose={closeConfirmDeletehandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
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
  <Stack width={w}
  sx={{
    overflow: "auto",
    height: "100vh"
  }}
  >
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
