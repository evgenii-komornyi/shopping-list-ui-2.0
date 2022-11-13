import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageNotFoundError } from '../pages/errors/404';
import { InternalServerError } from '../pages/errors/internal-server-error';
import { MainPage } from '../pages/main/main.page';

export const CommonRoutes = () => (
    <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFoundError />} />
        <Route path="/error" element={<InternalServerError />} />
    </Routes>
);
