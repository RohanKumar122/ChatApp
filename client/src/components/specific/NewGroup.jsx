import { useInputValidation } from "6pp";
import {
  Button,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Dailog from "@mui/material/Dialog";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItems from "../shared/UserItems";

const NewGroup = () => {
  const [members, setmembers] = useState(sampleUsers);

  const [selectMembers, setSelectMembers] = useState([]);

  const selectMemberHandler = (_id) => {
    setmembers((prev) =>
      prev.map((user) =>
        user._id === _id ? { ...user, isAdded: !user.isAdded } : user
      )
    );

    setSelectMembers((prev) =>
      prev.includes(_id)
        ? prev.filter((currElement) => currElement !== _id)
        : [...prev, _id]
    );
  };

  console.log(selectMembers);

  const groupName = useInputValidation("");

  const submitHandler = () => {
    console.log("Submitted");
  };

  const closeHandler = () => {};

  return (
    <Dailog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItems
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={submitHandler}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dailog>
  );
};

export default NewGroup;
