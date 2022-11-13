import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useProductsStore } from '../../app/productsStore';

export const ProductsList = () => {
    const { products } = useProductsStore();
    console.log(products);
    return (
        <>
            {products.map(product => (
                <Grid key={product.id} item xl={4} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">
                        {product.brand} - {product.name}
                    </Typography>
                    <Typography variant="h6">{product.category}</Typography>
                    <Typography variant="body1">
                        {product.description}
                    </Typography>
                    <Typography variant="h3">{product.price}</Typography>

                    <Typography variant="body1">
                        {new Date(product.creationDate).toString()}
                    </Typography>
                </Grid>
            ))}
        </>
    );
};
