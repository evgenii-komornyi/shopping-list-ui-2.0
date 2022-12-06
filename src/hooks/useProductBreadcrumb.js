import { useProductsStore } from '../app/productsStore';

export const useProductBreadcrumb = () => {
    const { products } = useProductsStore();

    const getProductNameById = productId => {
        const foundProduct = products.find(
            product => product.id === +productId
        );

        return foundProduct
            ? `${foundProduct.brand}-${foundProduct.title}`.toLowerCase()
            : null;
    };

    return { getProductNameById };
};
