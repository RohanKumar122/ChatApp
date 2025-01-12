import React from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import DailogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import DailogContentText from "@mui/material/DialogContentText";

const ConfirmDeleteDailog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DailogTitle>Confirm Delete</DailogTitle>
      <DialogContent>
        <DailogContentText>
          Are you sure you want to delete this item?
        </DailogContentText>
        <DialogActions>
          <Button onClick={deleteHandler}>Delete</Button>
          <Button onClick={handleClose} color="error"> Cancel</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteDailog;
