import React from 'react';
import { Card, CardActions, CardContent, Grid, Skeleton } from '@mui/material';

export const ProductCardSkeleton = () => {
    return (
        <Grid item xl={4} sx={{ textAlign: 'center' }}>
            <Card variant="outlined">
                <Skeleton variant="rectangular" height={140} animation="wave" />
                <CardContent>
                    <Grid container spacing={5} rowSpacing={2}>
                        <Grid item md={6}>
                            <Skeleton variant="rectangular" animation="wave" />
                        </Grid>
                        <Grid item md={6}>
                            <Skeleton variant="rectangular" animation="wave" />
                        </Grid>
                        <Grid item md={6}>
                            <Skeleton
                                variant="rectangular"
                                width={120}
                                animation="wave"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Skeleton
                        variant="circular"
                        width={50}
                        height={50}
                        animation="wave"
                    />
                    <Skeleton
                        variant="circular"
                        width={50}
                        height={50}
                        animation="wave"
                    />
                </CardActions>
            </Card>
        </Grid>
    );
};
