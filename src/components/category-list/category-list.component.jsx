import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useCategoriesStore } from '../../app/categoriesStore';
import { CategoryCard } from '../category-card/category-card.component';
import { LoadingProgress } from '../loadingProgress/loadingProgress.component';

import { useStyles } from './category-list.styles';

export const CategoryList = () => {
    const { categories, isLoaded } = useCategoriesStore();
    const classes = useStyles();

    return (
        <>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h1" className={classes.title}>
                    Categories
                </Typography>
            </Grid>
            {categories.map(category => (
                <Grid
                    key={category.id}
                    item
                    xl={4}
                    sx={{ textAlign: 'center' }}
                >
                    <CategoryCard category={category} />
                </Grid>
            ))}
            {!isLoaded && <LoadingProgress count={3} type="productCard" />}
        </>
    );
};
