import React from 'react';

export const Carousel = ({ images, id, title }) => {
    return (
        <>
            <img
                src={`${process.env.REACT_APP_IMAGES_SERVER}/products/product-${id}/${images[0].fileName}`}
                alt={`${title}-${id}`}
            />
        </>
    );
};
