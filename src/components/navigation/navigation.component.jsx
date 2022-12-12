import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import { CategoryTwoTone } from '@mui/icons-material';

import { AppBar, LinkContainer, useStyles } from './navigation.styles';

import { useAnchorEl } from '../../hooks/useAnchorEl';
import { useCategoriesStore } from '../../app/categoriesStore';
import { LoadingProgress } from '../loadingProgress/loadingProgress.component';
import { LanguageSwitcher } from '../languageSwitcher/languageSwitcher.component';
import { CustomBreadcrumbs } from '../custom-breadcrumbs/custom-breadcrumbs.component';

const settings = ['Profile', 'Logout'];

export const Navigation = () => {
    const navigate = useNavigate();

    const [anchorElUser, openUser, handleOpenUserMenu, handleCloseUserMenu] =
        useAnchorEl();

    const [
        anchorElCategories,
        openCategories,
        handleOpenCategories,
        handleCloseCategories,
    ] = useAnchorEl();

    const classes = useStyles();

    const { categories, isLoaded } = useCategoriesStore();

    const handleClick = (e, category) => {
        navigate(`/categories/${category}`);
        handleCloseCategories();
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <Button
                                id="basic-button"
                                variant="text"
                                aria-controls={
                                    openCategories ? 'basic-menu' : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={
                                    openCategories ? 'true' : undefined
                                }
                                startIcon={
                                    <CategoryTwoTone className={classes.icon} />
                                }
                                onClick={handleOpenCategories}
                            >
                                <LinkContainer>
                                    <Typography>Categories</Typography>
                                </LinkContainer>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElCategories}
                                open={openCategories}
                                onClose={handleCloseCategories}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {categories.map(category => (
                                    <MenuItem
                                        key={category.id}
                                        onClick={e =>
                                            handleClick(e, category.category)
                                        }
                                    >
                                        {category.category}
                                    </MenuItem>
                                ))}
                                {!isLoaded && (
                                    <LoadingProgress
                                        count={3}
                                        type="categories"
                                    />
                                )}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <LanguageSwitcher />
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar alt="U" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openUser}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map(setting => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CustomBreadcrumbs />
        </>
    );
};
