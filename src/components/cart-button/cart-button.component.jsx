import React from 'react';
import { Badge, Button } from '@mui/material';

import { ShoppingCartTwoTone } from '@mui/icons-material';

import {
    calculateItemsCount,
    calculateTotalPrice,
} from '../../helpers/cart.helper';

import { useCartStore } from '../../app/cartStore';
import { CartLayout } from '../cart-layout/cart-layout.component';
import { roundNumber } from '../../helpers/price.helper';

export const CartButton = () => {
    const { items, isOpen, openCloseCart } = useCartStore();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        openCloseCart(!isOpen);
    };

    return (
        <>
            <Button
                variant="outlined"
                startIcon={
                    <Badge
                        badgeContent={calculateItemsCount(items)}
                        color="primary"
                        sx={{
                            '& .MuiBadge-badge': {
                                fontSize: '10px',
                                right: '2px',
                                top: 4,
                            },
                        }}
                    >
                        <ShoppingCartTwoTone />
                    </Badge>
                }
                size="large"
                id="cart-button"
                aria-controls={isOpen ? 'cart' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                sx={{ pt: 1, pb: 1, width: 140 }}
                onClick={handleClick}
            >
                <span style={{ paddingLeft: '2px' }}>&euro;</span>{' '}
                {roundNumber(calculateTotalPrice(items)).toFixed(2)}
            </Button>
            <CartLayout anchor={anchorEl} />
        </>
    );
};
