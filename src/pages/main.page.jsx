import React from 'react';
import { Container, Grid } from '@mui/material';

import { ProductsList } from '../components/products-list/products-list.component';

export const MainPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                <ProductsList />
            </Grid>
        </Container>
    );
};
