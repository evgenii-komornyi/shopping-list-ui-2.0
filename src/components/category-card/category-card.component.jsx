import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

import { useStyles } from './category-card.styles';

export const CategoryCard = ({ category }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <CardActionArea
            component="div"
            className={classes.cardActionArea}
            onClick={() => navigate(`${category.category}`)}
        >
            <Card className={classes.card} variant="outlined">
                <div className={classes.contentContainer}>
                    <CardMedia
                        component="img"
                        alt={`${category.category}-${category.id}`}
                        height="240"
                        image="https://cms.bbcearth.com/sites/default/files/2021-09/Universe_Digital_Hero_B_1920x850px_72dpi_RGB_AW_0.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {category.category}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </CardActionArea>
    );
};
