import React from 'react'

const ConfirmDeleteDailog = ({
    open,
    handleClose,
    deleteHandler
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DailogTitle>
            Confirm Delete
        </DailogTitle>
        <DaillogContent>
            Are you sure you want to delete this item?
            <button onClick={deleteHandler} className='btn btn-danger'>Delete</button>
        </DaillogContent>
    </Dialog>
  )
}

export default ConfirmDeleteDailog