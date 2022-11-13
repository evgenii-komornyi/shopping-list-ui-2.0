import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useProductsStore } from './app/productsStore';

import { Navigation } from './components/navigation/navigation.component';
import { CommonRoutes } from './routes/commonRoutes';

import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { Container } from '@mui/system';
import { Header } from './components/header/header.component';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App = () => {
    const { fetchProducts } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = useCallback(() => {
        setOpen(prev => (prev = true));
    }, []);

    const handleDrawerClose = useCallback(() => {
        setOpen(prev => (prev = false));
    }, []);

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="lg">
                    <Navigation
                        open={open}
                        handleDrawerOpen={handleDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                    <CommonRoutes />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
