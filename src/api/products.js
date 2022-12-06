import axios from 'axios';

export const getProducts = cancelationToken =>
    axios.get(
        `${process.env.REACT_APP_SERVER_URI}/${process.env.REACT_APP_PRODUCT_API}`,
        {
            cancelToken: cancelationToken,
        }
    );

export const upload = formData =>
    axios.post(
        `${process.env.REACT_APP_SERVER_URI}/${process.env.REACT_APP_UPLOAD_API}?category=product`,
        formData,
        {
            headers: { 'Content-Type': 'multipart/form-data' },
        }
    );
