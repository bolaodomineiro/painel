import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/login/Login";
import Painel from "./pages/painel/Painel";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Painel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
