import React from "react";
import Dailog from "@mui/material/Dialog";
import {
  TextField,
  DialogTitle,
  InputAdornment,
  Stack,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import { List } from "@mui/material";
import UserItems from "../shared/UserItems";
import { sampleUsers } from "../../constants/sampleData";
import { useState } from "react";

const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendrequest = false;
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (_id) => {
    console.log(_id);
  };

  return (
    <Dailog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItems
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendrequest}
            />
          ))}
        </List>
      </Stack>
    </Dailog>
  );
};

export default Search;
