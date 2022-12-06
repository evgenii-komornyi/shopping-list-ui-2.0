import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useProductsStore } from './app/productsStore';
import { useCategoriesStore } from './app/categoriesStore';

import { ThemeProvider, CssBaseline, Container } from '@mui/material';

import { Header } from './components/header/header.component';
import { Navigation } from './components/navigation/navigation.component';

import { MainRoutes } from './routes/mainRoutes';
import { useCancelToken } from './hooks/useCancelToken';

import { theme } from './helpers/theme.helper';
import { CustomBreadcrumbs } from './components/custom-breadcrumbs/custom-breadcrumbs.component';

const App = () => {
    const { fetchProducts } = useProductsStore();
    const { fetchCategories } = useCategoriesStore();

    const { newCancelToken, isCancel } = useCancelToken();

    useEffect(() => {
        fetchProducts(newCancelToken(), isCancel);
    }, [fetchProducts, isCancel, newCancelToken]);

    useEffect(() => {
        fetchCategories(newCancelToken(), isCancel);
    }, [fetchCategories, isCancel, newCancelToken]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="lg">
                    <Navigation />
                    <CustomBreadcrumbs />
                    <MainRoutes />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
