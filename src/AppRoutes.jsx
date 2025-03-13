import{ useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
// sub rotas da home
import Jogo from './pages/home/homeRoutes/jogo/Jogo';
import MyBets from './pages/home/homeRoutes/myBets/MyBets';
import ResultsBets from './pages/home/homeRoutes/resultsBets/ResultsBets';

import WinnersBets from './pages/home/homeRoutes/winners/WinnersBets';
import Awards from './pages/home/homeRoutes/awards/Awards';
// rotas do painel
import Users from './pages/users/Users';
import BetPool from './pages/createBetPool/BetPool';
// context
import { useAuthContext } from './context/AuthContext';

function AppRoutes({ $menuToggle }) {

    const { user } = useAuthContext();

    return (
        <Routes>
            <Route path="/dashboard/" element={<Home />}>
                <Route index={true} path="jogo" element={<Jogo />} />
                <Route path="myBets" element={<MyBets />} />
                <Route path="resultsBets" element={<ResultsBets />} />
                <Route path="winnersBets" element={<WinnersBets />} />
                <Route path="awards" element={<Awards />} />
            </Route>
            { user?.isAdmin  === true  && 
                <>
                    <Route path="/users" element={<Users $menuToggle={$menuToggle} />} />
                    <Route path="/createBetPool" element={<BetPool />} />
                </>
            }
            {/* Redireciona qualquer rota inválida para a página de login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default AppRoutes;
