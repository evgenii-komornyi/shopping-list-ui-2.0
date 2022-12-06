import React from 'react';

import { CategoryMenuSkeleton } from '../../skeletons/category-menu.skeleton';
import { ProductCardSkeleton } from '../../skeletons/product-card.skeleton';
import { ProductSkeleton } from '../../skeletons/product.skeleton';

export const Skeletons = ({ type }) => {
    return (
        <>
            {type === 'categories' && <CategoryMenuSkeleton />}
            {type === 'productCard' && <ProductCardSkeleton />}
            {type === 'productDetails' && <ProductSkeleton />}
        </>
    );
};
