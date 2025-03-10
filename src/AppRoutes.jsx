import React from 'react';
import { Routes, Route } from 'react-router-dom';
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


function AppRoutes({ $menuToggle }) {
    return (
        <Routes>
            <Route path="/dashboard/" element={<Home />}>
                <Route index={true} path="jogo" element={<Jogo />} />
                <Route path="myBets" element={<MyBets />} />
                <Route path="resultsBets" element={<ResultsBets />} />
                <Route path="winnersBets" element={<WinnersBets />} />
                <Route path="awards" element={<Awards />} />
            </Route>
            <Route path="/users" element={<Users $menuToggle={$menuToggle} />} />
            <Route path="/createBetPool" element={<BetPool />} />
            {/* <Route path="/components" element={<Components />} /> */}
        </Routes>
    );
}

export default AppRoutes;
