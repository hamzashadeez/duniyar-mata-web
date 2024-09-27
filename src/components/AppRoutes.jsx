import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import userData from "../recoil/userData";
import { useRecoilState } from "recoil";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  const [user, setUser] = useRecoilState(userData);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
