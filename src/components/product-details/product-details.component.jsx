import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
} from '@mui/material';

import { getProductById } from '../../api/products';

import { useCancelToken } from '../../hooks/useCancelToken';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';
import { useStyles } from './product-details.styles';
import { LoadingProgress } from '../loadingProgress/loadingProgress.component';
import { Carousel } from '../carousel/carousel.component';

export const ProductDetails = () => {
    const classes = useStyles();
    const { productId } = useParams();
    const { newCancelToken, isCancel } = useCancelToken();

    const [product, setProduct] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const { data } = await getProductById(
                    productId,
                    newCancelToken()
                );

                setProduct(data.product);

                setIsLoaded(true);
            } catch (error) {
                if (isCancel(error)) return;
                setIsLoaded(false);
            }
        };
        fetchProductById();
    }, [productId, newCancelToken, isCancel]);

    return isLoaded ? (
        <>
            <Grid item xl={8}>
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Carousel
                            images={product.files}
                            id={product.id}
                            title={product.title}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xl={4}>
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h1">{product.title}</Typography>
                        <Typography variant="body2">{product.brand}</Typography>
                        <Typography variant="h4">
                            {product.price} &euro;
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <AddToCartButton size="large" product={product} />
                    </CardActions>
                    <CardContent>
                        <Typography variant="body">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    ) : (
        <LoadingProgress count={0} type="productDetails" />
    );
};
