import React from 'react';
import { Container, Grid } from '@mui/material';
import { ProductDetails } from '../components/product-details/product-details.component';

export const ProductDetailsPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                <ProductDetails />
            </Grid>
        </Container>
    );
};
