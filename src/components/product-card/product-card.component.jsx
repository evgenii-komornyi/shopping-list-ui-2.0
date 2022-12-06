import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

import { useStyles } from './product-card.styles';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';

export const ProductCard = product => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <CardActionArea
            component="div"
            className={classes.cardActionArea}
            onClick={() =>
                navigate(`/categories/${product.category}/${product.id}`)
            }
        >
            <Card className={classes.card} variant="outlined">
                <div className={classes.contentContainer}>
                    <CardMedia
                        component="img"
                        alt={`${product.title}-${product.id}`}
                        height="240"
                        image={`${process.env.REACT_APP_IMAGES_SERVER}/products/product-${product.id}/${product.files[0].fileName}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.brand} - {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.price} &euro;
                        </Typography>
                    </CardContent>
                </div>
                <CardActions className={classes.cardActions}>
                    <AddToCartButton size="medium" product={product} />
                </CardActions>
            </Card>
        </CardActionArea>
    );
};
