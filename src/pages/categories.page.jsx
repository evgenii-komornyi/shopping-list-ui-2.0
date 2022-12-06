import React from 'react';
import { Container, Grid } from '@mui/material';

import { CategoryList } from '../components/category-list/category-list.component';

export const CategoriesPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                <CategoryList />
            </Grid>
        </Container>
    );
};
