import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from '../helpers/data.helper';

export const MainRoutes = () => (
    <Routes>
        {mainRoutes.map(({ path, element }, key) => (
            <Route path={path} element={element} key={key} />
        ))}
    </Routes>
);
