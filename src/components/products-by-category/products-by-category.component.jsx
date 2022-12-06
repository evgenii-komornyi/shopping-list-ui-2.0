import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../../app/productsStore';
import { Grid } from '@mui/material';

import { LoadingProgress } from '../loadingProgress/loadingProgress.component';
import { ProductCard } from '../product-card/product-card.component';

export const ProductsByCategory = () => {
    const { category } = useParams();
    const { products, isLoaded } = useProductsStore();

    return (
        <>
            {products
                .filter(product => product.category === category)
                .map(product => (
                    <Grid
                        key={product.id}
                        item
                        xl={4}
                        sx={{ textAlign: 'center' }}
                    >
                        <ProductCard {...product} />
                    </Grid>
                ))}
            {!isLoaded && <LoadingProgress count={3} type="productCard" />}
        </>
    );
};
