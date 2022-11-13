import create from 'zustand';

import { devtools } from 'zustand/middleware';
import { getProducts } from '../api/products';

const productsStore = set => ({
    products: [],
    status: 0,
    validationErrors: null,
    dbErrors: null,
    exception: null,

    fetchProducts: async () => {
        try {
            const { data } = await getProducts();

            set({ products: data.products, status: data.status });
        } catch (error) {
            set({ status: error.request.status });
        }
    },
});

export const useProductsStore = create(devtools(productsStore));
