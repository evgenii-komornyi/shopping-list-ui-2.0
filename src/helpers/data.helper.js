import { MainPage } from '../pages/main.page';
import { CategoriesPage } from '../pages/categories.page';
import { CategoryDetailsPage } from '../pages/category-details.page';
import { ProductDetailsPage } from '../pages/product-details.page';
import { PageNotFoundError } from '../pages/errors/404';
import { InternalServerError } from '../pages/errors/internal-server-error';

export const mainRoutes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/categories',
        element: <CategoriesPage />,
    },
    {
        path: '/categories/:category',
        element: <CategoryDetailsPage />,
    },
    {
        path: '/categories/:category/:productId',
        element: <ProductDetailsPage />,
    },
    {
        path: '*',
        element: <PageNotFoundError />,
    },
    {
        path: '/error',
        element: <InternalServerError />,
    },
];

export const breadcrumbNameMap = {
    '/categories': {
        title: 'Categories',
    },
    '/categories/Alcohol': {
        title: 'Alcohol',
    },
    '/categories/Bread': {
        title: 'Bread',
    },
    '/categories/Coffee': {
        title: 'Coffee',
    },
    '/categories/Fish': {
        title: 'Fish',
    },
    '/categories/Fruits': {
        title: 'Fruits',
    },
    '/categories/Meat': {
        title: 'Meat',
    },
    '/categories/Milk': {
        title: 'Milk',
    },
    '/categories/Sweets': {
        title: 'Sweets',
    },
    '/categories/Tea': {
        title: 'Tea',
    },
    '/categories/Vegetables': {
        title: 'Vegetables',
    },
};
