import React from "react";
import { Stack, Typography } from "@mui/material";
import Dailog from "@mui/material/Dialog";
import { sampleUsers } from "../../constants/sampleData";
import DailogTitle from "@mui/material/DialogTitle";
import UserItems from "../shared/UserItems";
import Button from "@mui/material/Button";
import { useState } from "react";

const AddMemberDailog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);

  const [selectMembers, setSelectMembers] = useState([]);

  const selectMemberHandler = (id) => {
    

    setSelectMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const closeHandler =()=> {
    setSelectMembers([]);
    setMembers([]);
  };
  const AddmemberSubmitHandler = () => {
    closeHandler();
  };

  return (
    <Dailog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"1rem"}>
        <DailogTitle textAlign={"center"}>Add Member</DailogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItems
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={AddmemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dailog>
  );
};

export default AddMemberDailog;
