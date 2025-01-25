import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Contests from './pages/contests/Contests';
import Pages from './pages/pagesEdit/Pages';
import Components from './pages/componentsEdit/Components';

function AppRoutes({ $menuToggle}) {
    return (
        <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/users" element={<Users  $menuToggle={$menuToggle} />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/components" element={<Components />} />
        </Routes>
    );
}

export default AppRoutes;
