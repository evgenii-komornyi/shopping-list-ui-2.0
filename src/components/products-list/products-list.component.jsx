import React from 'react';
import { Grid, Typography } from '@mui/material';

import { ProductCard } from '../product-card/product-card.component';

import { useProductsStore } from '../../app/productsStore';
import { useStyles } from './products-list.styles';
import { LoadingProgress } from '../loadingProgress/loadingProgress.component';

export const ProductsList = () => {
    const { products, isLoaded } = useProductsStore();
    const classes = useStyles();

    return (
        <>
            <Grid item xl={12}>
                <Typography variant="h1" className={classes.title}>
                    New products
                </Typography>
            </Grid>
            {products.map(product => (
                <Grid key={product.id} item xl={4} sx={{ textAlign: 'center' }}>
                    <ProductCard {...product} />
                </Grid>
            ))}
            {!isLoaded && <LoadingProgress count={3} type="productCard" />}
        </>
    );
};
