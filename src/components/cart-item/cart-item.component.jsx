import React from 'react';
import {
    AddCircleOutlineTwoTone,
    RemoveCircleTwoTone,
} from '@mui/icons-material';

import { useCartStore } from '../../app/cartStore';

import { QuantityButton } from '../quantity-button/quantity-button.component';

import {
    CartItemContainer,
    CartItemDescriptionContainer,
    ItemTitle,
    ItemBrand,
    PriceContainer,
    useStyles,
    ItemCategory,
    QuantityContainer,
} from './cart-item.styles';
import { roundNumber } from '../../helpers/price.helper';

export const CartItem = ({ item, isOverlay = false }) => {
    const classes = useStyles();

    const { addItem, removeItem } = useCartStore();

    return (
        <CartItemContainer>
            <CartItemDescriptionContainer isOverlay={isOverlay}>
                <ItemTitle isOverlay={isOverlay}>{item.title}</ItemTitle>
                <ItemBrand isOverlay={isOverlay}>{item.brand}</ItemBrand>
                <ItemCategory isOverlay={isOverlay}>
                    {item.category}
                </ItemCategory>
                <PriceContainer isOverlay={isOverlay}>
                    &euro; {roundNumber(item.price).toFixed(2)}
                </PriceContainer>
            </CartItemDescriptionContainer>
            <QuantityContainer isOverlay={isOverlay}>
                <QuantityButton
                    item={item}
                    size="small"
                    color="success"
                    handleClick={addItem}
                >
                    <AddCircleOutlineTwoTone fontSize="small" />
                </QuantityButton>
                {item.quantity}
                <QuantityButton
                    item={item}
                    size="small"
                    color="error"
                    handleClick={removeItem}
                >
                    <RemoveCircleTwoTone fontSize="small" />
                </QuantityButton>
            </QuantityContainer>
            <div className={classes.imageContainer}>
                <img
                    src={`${process.env.REACT_APP_IMAGES_SERVER}/products/product-${item.id}/${item.files[0].fileName}`}
                    alt={`${item.title}-${item.brand}`}
                    className={classes.image}
                />
            </div>
        </CartItemContainer>
    );
};
