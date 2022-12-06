import React from 'react';

import { Container, Toolbar } from '@mui/material';

import { AppBar } from './header.styles';

import { LanguageSwitcher } from '../languageSwitcher/languageSwitcher.component';
import { SearchInput } from '../searchInput/searchInput.component';

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: { md: 80 } }}>
                    <LanguageSwitcher />
                    <SearchInput />
                    <LanguageSwitcher />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
