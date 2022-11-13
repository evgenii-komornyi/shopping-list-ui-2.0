import React from 'react';

import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchInput = () => {
    return (
        <FormControl sx={{ width: '100%', mr: 5, ml: 5 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
                Search
            </InputLabel>
            <Input
                id="standard-adornment-password"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};
