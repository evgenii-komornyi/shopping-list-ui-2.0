import React from 'react';
import { Container, Grid } from '@mui/material';

import { useProductsStore } from '../../app/productsStore';

import { LoadingProgress } from '../../components/loadingProgress/loadingProgress.component';
import { ProductsList } from '../../components/products-list/products-list.component';

export const MainPage = () => {
    const { status } = useProductsStore();

    return status !== 0 ? (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                <ProductsList />
            </Grid>
        </Container>
    ) : (
        <LoadingProgress />
    );
};
