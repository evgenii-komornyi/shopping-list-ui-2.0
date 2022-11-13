import React, { useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useProductsStore } from '../../app/productsStore';

let timer;

export const LoadingProgress = () => {
    const navigate = useNavigate();
    const { status } = useProductsStore();

    useEffect(() => {
        if (status === 0) {
            timer = setTimeout(() => {
                navigate('/error');
            }, 10000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [navigate, status]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(0,0,0,.5)',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <CircularProgress sx={{ mr: 'auto', ml: 'auto' }} />
        </Box>
    );
};
