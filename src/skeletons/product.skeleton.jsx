import { Card, CardActions, CardContent, Grid, Skeleton } from '@mui/material';
import React from 'react';

export const ProductSkeleton = () => {
    return (
        <>
            <Grid item xl={8}>
                <Card variant="outlined">
                    <CardContent>
                        <Skeleton
                            variant="rectangular"
                            height={280}
                            animation="wave"
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xl={4}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container spacing={5} rowSpacing={2}>
                            <Grid item xl={12}>
                                <Skeleton
                                    variant="rectangular"
                                    width={200}
                                    height={20}
                                    animation="wave"
                                />
                            </Grid>
                            <Grid item xl={12}>
                                <Skeleton
                                    variant="rectangular"
                                    width={100}
                                    height={10}
                                    animation="wave"
                                />
                            </Grid>
                            <Grid item xl={12}>
                                <Skeleton
                                    variant="rectangular"
                                    width={70}
                                    height={10}
                                    animation="wave"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Skeleton
                            variant="rounded"
                            width={150}
                            height={100}
                            animation="wave"
                        />
                    </CardActions>
                    <CardContent>
                        <Grid container spacing={5} rowSpacing={2}>
                            {Array.from(new Array(4)).map((_, key) => (
                                <Grid item key={key} xl={12}>
                                    <Skeleton
                                        variant="rectangular"
                                        width={200}
                                        height={10}
                                        animation="wave"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};
