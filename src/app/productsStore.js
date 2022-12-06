import create from 'zustand';

import { devtools } from 'zustand/middleware';
import { getProducts } from '../api/products';

const productsStore = set => ({
    products: [],
    isLoaded: false,
    validationErrors: null,
    dbErrors: null,
    exception: null,

    fetchProducts: async (cancelationToken, isCancel) => {
        try {
            const { data } = await getProducts(cancelationToken);

            set({ products: data.products, isLoaded: true });
        } catch (error) {
            set({ isLoaded: false });
            if (isCancel(error)) return;
        }
    },
});

export const useProductsStore = create(devtools(productsStore));
