import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeModalStatus } from 'redux/slices/ModalSlice';
export default function ModalComponent({text,icon,CustomizeForm}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [windowsWidth, setWindowsWidth] = useState()
  const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding:"1rem"
  };

useEffect(() => {

  const { innerWidth: width} = window;
  setWindowsWidth(width)

},[])

  return (
    <Typography>
      <Button sx={{fontWeight:"bold", color:"#163b60"}} startIcon={icon}  onClick={handleOpen}>{text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle} >
          <CustomizeForm/>
        </Box>
      </Modal>
    </Typography>
  );
}
