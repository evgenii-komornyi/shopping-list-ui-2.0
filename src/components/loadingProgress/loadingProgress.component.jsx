import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useProductsStore } from '../../app/productsStore';
import { useCategoriesStore } from '../../app/categoriesStore';
import { Skeletons } from '../skeletons/skeletons.component';

let timer;

export const LoadingProgress = ({ count, type }) => {
    const navigate = useNavigate();
    const isProductsLoaded = useProductsStore(state => state.isLoaded);
    const isCategoriesLoaded = useCategoriesStore(state => state.isLoaded);

    useEffect(() => {
        if (!isProductsLoaded || !isCategoriesLoaded) {
            timer = setTimeout(() => {
                navigate('/error');
            }, 10000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [navigate, isProductsLoaded, isCategoriesLoaded]);

    return count !== 0 ? (
        Array.from(new Array(count)).map((_, index) => (
            <Skeletons type={type} key={index} />
        ))
    ) : (
        <Skeletons type={type} />
    );
};
