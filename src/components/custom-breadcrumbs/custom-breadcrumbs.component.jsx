import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

import { HomeTwoTone } from '@mui/icons-material';

import { StyledBreadcrumb } from './custom-breadcrumbs.styles';
import { useProductBreadcrumb } from '../../hooks/useProductBreadcrumb';
import { breadcrumbNameMap } from '../../helpers/data.helper';

export const CustomBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const navigate = useNavigate();
    const { getProductNameById } = useProductBreadcrumb();

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mt: 2, alignItems: 'center' }}
        >
            <StyledBreadcrumb
                component="a"
                onClick={() => navigate('/')}
                label="Home"
                icon={<HomeTwoTone fontSize="small" />}
            />
            {pathnames.map((_, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const value = pathnames[pathnames.length - 1];

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {!isNaN(parseInt(value))
                            ? getProductNameById(value)
                            : value}
                    </Typography>
                ) : (
                    <StyledBreadcrumb
                        component="a"
                        onClick={() => navigate(to)}
                        label={breadcrumbNameMap[to].title}
                        key={to}
                    />
                );
            })}
        </Breadcrumbs>
    );
};
