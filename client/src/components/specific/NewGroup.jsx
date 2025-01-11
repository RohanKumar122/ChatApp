import {
  Button,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Dailog from "@mui/material/Dialog";
import { sampleUsers } from "../../constants/sampleData";
import UserItems from "../shared/UserItems";
import { useInputValidation } from "6pp";

const NewGroup = () => {

  const groupName = useInputValidation("");



  const selectMemberHsndler = (_id) => {};
  return (
    <Dailog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onchange={groupName.changeHandler} />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItems user={i} key={i._id} handler={selectMemberHsndler} />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">Cancel</Button>
          <Button variant="contained" color="primary" size="large">Create</Button>
        </Stack>
      </Stack>
    </Dailog>
  );
};

export default NewGroup;
