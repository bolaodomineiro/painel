import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
// sub rotas da home
import Jogo from './pages/home/homeRoutes/jogo/Jogo';
import MyBets from './pages/home/homeRoutes/myBets/MyBets';

import Users from './pages/users/Users';
import Pages from './pages/pagesEdit/Pages';
import Components from './pages/componentsEdit/Components';

function AppRoutes({ $menuToggle }) {
    return (
        <Routes>
            <Route path="/dashboard/" element={<Home />}>
                <Route index={true} path="jogo" element={<Jogo />} />
                <Route path="myBets" element={<MyBets />} />
            </Route>
            <Route path="/users" element={<Users $menuToggle={$menuToggle} />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/components" element={<Components />} />
        </Routes>
    );
}

export default AppRoutes;
