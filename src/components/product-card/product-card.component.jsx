import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

import { AddShoppingCartTwoTone } from '@mui/icons-material';

import { useStyles } from './product-card.styles';

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
                        alt={`${product.name}-${product.id}`}
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
                    <Button
                        size="medium"
                        variant="contained"
                        startIcon={<AddShoppingCartTwoTone />}
                        className={classes.addToCartButton}
                        onClick={e => {
                            console.log('add to cart', product);
                            e.stopPropagation();
                        }}
                    >
                        add to cart
                    </Button>
                </CardActions>
            </Card>
        </CardActionArea>
    );
};
