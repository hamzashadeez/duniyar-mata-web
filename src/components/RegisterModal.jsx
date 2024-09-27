import React from "react";
import { Box, Button, Checkbox, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 600,
  bgcolor: "white",
  
  boxShadow: 24,
  p: 4,
};

function RegisterModal({ open, handleClose }) {
    const formSubmit = async (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h4 className='text-center text-2xl font-bold text-brand'>
            Register New Account
          </h4>
          <form onSubmit={formSubmit} className='my-6 flex-1 h-[300px] overflow-y-auto'>
            <input type="text" placeholder="Enter Username" className="bg-brand/5 ring-brand outline-brand w-full p-3 shadow-sm shadow-brand/50" />
          </form>

          <button className='bg-gray-200 py-2 mt-2 text-black w-full outline-none border-none hover:scale-105'>
            Cancel
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default RegisterModal;
