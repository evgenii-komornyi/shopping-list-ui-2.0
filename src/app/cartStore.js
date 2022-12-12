import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { addItemToCart, removeItemFromCart } from '../helpers/cart.helper';

const cartStore = set => ({
    isOpen: false,
    items: [],

    openCloseCart: flag => {
        set(state => ({ ...state, isOpen: flag }));
    },

    addItem: itemToCart => {
        set(state => ({ items: addItemToCart(state.items, itemToCart) }));
    },

    removeItem: itemToRemove => {
        set(state => ({
            items: removeItemFromCart(state.items, itemToRemove),
        }));
    },
});

export const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: 'cart',
            partialize: state => ({ items: state.items }),
        })
    )
);
