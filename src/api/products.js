import axios from 'axios';

export const getProducts = () =>
    axios.get(
        `${process.env.REACT_APP_SERVER_URI}/${process.env.REACT_APP_PRODUCT_API}`
    );
