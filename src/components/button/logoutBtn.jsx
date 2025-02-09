// src/components/button/LogoutBtn.jsx
import React from "react";
import  { Button } from "./logoutStyles";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Button onClick={() => handleLogout()} >
      Sair
    </Button>
  );
};

export default LogoutBtn;
