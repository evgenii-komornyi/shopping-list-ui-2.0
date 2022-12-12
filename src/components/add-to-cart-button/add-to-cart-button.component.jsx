import React from 'react';
import { Button } from '@mui/material';
import { AddShoppingCartTwoTone } from '@mui/icons-material';
import { useCartStore } from '../../app/cartStore';

export const AddToCartButton = ({ size, product }) => {
    const { addItem } = useCartStore();

    return (
        <Button
            size={size}
            variant="contained"
            startIcon={<AddShoppingCartTwoTone />}
            onClick={e => {
                addItem(product);
                e.stopPropagation();
            }}
        >
            add to cart
        </Button>
    );
};
