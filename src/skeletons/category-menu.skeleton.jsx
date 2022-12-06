import React from 'react';
import { MenuItem, Skeleton } from '@mui/material';

export const CategoryMenuSkeleton = () => {
    return (
        <MenuItem sx={{ width: 120 }}>
            <Skeleton variant="rectangular" width={100} animation="wave" />
        </MenuItem>
    );
};
