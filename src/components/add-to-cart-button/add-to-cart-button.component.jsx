import React from 'react';
import { Button } from '@mui/material';
import { AddShoppingCartTwoTone } from '@mui/icons-material';

export const AddToCartButton = ({ size, product }) => {
    return (
        <Button
            size={size}
            variant="contained"
            startIcon={<AddShoppingCartTwoTone />}
            onClick={e => {
                console.log('add to cart', product);
                e.stopPropagation();
            }}
        >
            add to cart
        </Button>
    );
};
