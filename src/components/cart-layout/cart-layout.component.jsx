import React from 'react';
import { Button, Grid, Menu } from '@mui/material';
import { useCartStore } from '../../app/cartStore';

import { CartItem } from '../cart-item/cart-item.component';

import {
    ButtonsContainer,
    CartContainer,
    CartFooter,
    CartHeader,
    ItemsContainer,
    TotalContainer,
} from './cart-layout.styles';

import {
    calculateItemsCount,
    calculateTotalPrice,
} from '../../helpers/cart.helper';
import { roundNumber } from '../../helpers/price.helper';

import {
    ShoppingBagTwoTone,
    ShoppingCartCheckoutTwoTone,
} from '@mui/icons-material';

export const CartLayout = ({ anchor }) => {
    const { isOpen, items, openCloseCart } = useCartStore();

    const itemsCount = calculateItemsCount(items);

    return (
        <Menu
            id="cart"
            anchorEl={anchor}
            open={isOpen}
            onClose={() => openCloseCart(false)}
            MenuListProps={{
                'aria-labelledby': 'cart-button',
            }}
        >
            <Grid container rowSpacing={0}>
                <CartContainer>
                    {items.length > 0 ? (
                        <>
                            <CartHeader>
                                {`My Bag: ${itemsCount} ${
                                    itemsCount === 1 ? 'item' : 'items'
                                }`}
                            </CartHeader>
                            <ItemsContainer>
                                {items.map(item => (
                                    <CartItem
                                        item={item}
                                        isOverlay={true}
                                        key={item.id}
                                    />
                                ))}
                            </ItemsContainer>
                            <CartFooter>
                                <TotalContainer>
                                    <h3>Total:</h3>
                                    <h3>
                                        &euro;{' '}
                                        {roundNumber(
                                            calculateTotalPrice(items)
                                        ).toFixed(2)}
                                    </h3>
                                </TotalContainer>
                                <ButtonsContainer>
                                    <Button
                                        variant="outlined"
                                        startIcon={
                                            <ShoppingCartCheckoutTwoTone />
                                        }
                                    >
                                        checkout
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="info"
                                        startIcon={<ShoppingBagTwoTone />}
                                    >
                                        View Cart
                                    </Button>
                                </ButtonsContainer>
                            </CartFooter>
                        </>
                    ) : (
                        <h6>Cart is empty.</h6>
                    )}
                </CartContainer>
            </Grid>
        </Menu>
    );
};
