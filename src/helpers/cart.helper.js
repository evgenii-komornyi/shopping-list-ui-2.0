export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [
        ...cartItems,
        {
            ...cartItemToAdd,
            quantity: 1,
        },
    ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const calculateTotalPrice = cartItems => {
    const quantities = cartItems.map(({ quantity }) => quantity);

    return cartItems.reduce(
        (accumulatedQuantity, cartItem, index) =>
            accumulatedQuantity + cartItem.price * quantities[index],
        0
    );
};

export const calculateItemsCount = items =>
    items.reduce(
        (accumulatedCount, item) => accumulatedCount + item.quantity,
        0
    );
