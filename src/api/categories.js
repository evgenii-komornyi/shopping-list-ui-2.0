import axios from 'axios';

export const getCategories = cancelationToken =>
    axios.get(
        `${process.env.REACT_APP_SERVER_URI}/${process.env.REACT_APP_CATEGORIES_API}`,
        {
            cancelToken: cancelationToken,
        }
    );
