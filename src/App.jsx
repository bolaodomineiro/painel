import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Contexts
import { AuthProvider } from "./context/AuthContext";
import { BetPoolProvider } from "./context/BetPoolContext";
import { MyBetsProvider } from "./context/MyBetsContext";
import {ResultsProvider} from "./context/ResultsContext";
import {WinnersProvider} from "./context/WinnerContex";
import {RulesProvider} from "./context/RulesContext";
import ProtectedRoute from "./ProtectedRoute";// Importe a rota protegida
import Login from "./pages/login/Login";
import Painel from "./pages/painel/Painel";

const App = () => {
  return (
    <AuthProvider>
      <BetPoolProvider>
        <RulesProvider>
          <MyBetsProvider>
            <ResultsProvider>
              <WinnersProvider>
                <Routes>
                  {/* Rota pública para login */}
                  <Route path="/login" element={<Login />} />

                  {/* Rota protegida para o painel */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/*" element={<Painel />} />
                  </Route>

                  {/* Redirecionamento para erro caso a rota não exista */}
                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
              </WinnersProvider>
            </ResultsProvider>
          </MyBetsProvider>
        </RulesProvider>
      </BetPoolProvider>
    </AuthProvider>
  );
};

export default App;
