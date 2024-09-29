import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import userData from "../recoil/userData";
import { useRecoilState } from "recoil";
import HomePage from "../pages/HomePage";
import SinglePost from "../pages/SinglePost";
import Register from "../pages/Register";

function AppRoutes() {
  const [user, setUser] = useRecoilState(userData);

  return (
    <div className='bg-gray-50'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
