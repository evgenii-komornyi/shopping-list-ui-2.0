import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCategories } from '../api/categories';

const categoriesStore = set => ({
    categories: [],
    isLoaded: false,
    validationErrors: null,
    dbErrors: null,
    exception: null,

    fetchCategories: async (cancelationToken, isCancel) => {
        try {
            const { data } = await getCategories(cancelationToken);

            set({ categories: data.categories, isLoaded: true });
        } catch (error) {
            set({ isLoaded: false });
            if (isCancel(error)) return;
        }
    },
});

export const useCategoriesStore = create(devtools(categoriesStore));
