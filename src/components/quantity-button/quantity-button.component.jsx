import React from 'react';
import { IconButton } from '@mui/material';

export const QuantityButton = ({
    handleClick,
    item,
    size,
    color,
    children,
}) => {
    const onClickHandler = e => {
        handleClick(item);
        e.stopPropagation();
    };

    return (
        <IconButton size={size} color={color} onClick={onClickHandler}>
            {children}
        </IconButton>
    );
};
