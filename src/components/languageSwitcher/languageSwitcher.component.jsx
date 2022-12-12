import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { LanguageTwoTone } from '@mui/icons-material';

import { useAnchorEl } from '../../hooks/useAnchorEl';

const ITEM_HEIGHT = 48;

export const LanguageSwitcher = () => {
    const [anchorEl, open, handleOpen, handleClose] = useAnchorEl();
    const [language, setLanguage] = useState('English');

    const handleClick = e => {
        handleClose();
        setLanguage(e.target.dataset.language);
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<LanguageTwoTone />}
                sx={{ mr: 2 }}
                onClick={handleOpen}
            >
                {language}
            </Button>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'language',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleClick} data-language="English">
                    EN
                </MenuItem>
                <MenuItem onClick={handleClick} data-language="Latvian">
                    LV
                </MenuItem>
                <MenuItem onClick={handleClick} data-language="Russian">
                    RU
                </MenuItem>
            </Menu>
        </>
    );
};
