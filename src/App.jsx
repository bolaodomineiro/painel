import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//contexts
import { AuthProvider } from "./context/AuthContext";
import { BetPoolProvider } from "./context/BetPoolContext";
import { MyBetsProvider } from "./context/MyBetsContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/login/Login";
import Painel from "./pages/painel/Painel";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <AuthProvider>
      <BetPoolProvider>
        <MyBetsProvider>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/error" element={<Error />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Painel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
        </MyBetsProvider>
      </BetPoolProvider>
    </AuthProvider>
  );
};

export default App;
