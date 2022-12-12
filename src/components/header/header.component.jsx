import React from 'react';

import { Container, Toolbar, Typography } from '@mui/material';

import { AppBar } from './header.styles';

import { SearchInput } from '../searchInput/searchInput.component';
import { CartButton } from '../cart-button/cart-button.component';

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: { md: 80 } }}>
                    <Typography variant="h3" sx={{ color: 'black' }}>
                        LOGO
                    </Typography>
                    <SearchInput />
                    <CartButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
