import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Button from "./RippleBtn";
import RegisterModal from "./RegisterModal";

function Header() {
  // register modal states
  const [openRegisterModal, setRegisterModal] = useState(false);
  const handleRegisterOpen = () => setRegisterModal(true);
  const handleRegisterClose = () => setRegisterModal(false);

  return (
    <>
    <div className='bg-white flex items-center justify-between h-[70px] shadow-xl px-4'>
      <div className='flex gap-1'>
        <Button className='flex items-center justify-center px-2'>
          <MdOutlineMenu className='' size={25} />
        </Button>
        <div>
          <img alt='logo' src='/2.png' className='h-[45px] object-contain' />
        </div>
      </div>
      {/* logo */}
      <div className='flex flex-row gap-2'>
        <Button onClick={handleRegisterOpen} className='text-sm text-white bg-brand px-5 py-1.5 rounded'>
          Login
        </Button>
        <Button className='text-sm font-semibold border-2 border-brand text-brand bg-white px-4 py-1.5 rounded'>
          Register
        </Button>
      </div>
    </div>
    <RegisterModal open={openRegisterModal} handleClose={handleRegisterClose} />
    </>
  );
}

export default Header;
