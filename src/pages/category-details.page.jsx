import { Container, Grid } from '@mui/material';
import React from 'react';
import { ProductsByCategory } from '../components/products-by-category/products-by-category.component';

export const CategoryDetailsPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                <ProductsByCategory />
            </Grid>
        </Container>
    );
};
