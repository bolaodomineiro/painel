import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Contexts
import { AuthProvider } from "./context/AuthContext";
import { BetPoolProvider } from "./context/BetPoolContext";
import { MyBetsProvider } from "./context/MyBetsContext";
import ProtectedRoute from "./ProtectedRoute";// Importe a rota protegida
import Login from "./pages/login/Login";
import Painel from "./pages/painel/Painel";
// import Error from "./pages/error/Error";

const App = () => {
  return (
    <AuthProvider>
      <BetPoolProvider>
        <MyBetsProvider>
          <Routes>
            {/* Rota pública para login */}
            <Route path="/login" element={<Login />} />

            {/* Rota protegida para o painel */}
            <Route element={<ProtectedRoute />}>
              <Route path="/*" element={<Painel />} />
            </Route>

            {/* Redirecionamento para erro caso a rota não exista */}
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
        </MyBetsProvider>
      </BetPoolProvider>
    </AuthProvider>
  );
};

export default App;
