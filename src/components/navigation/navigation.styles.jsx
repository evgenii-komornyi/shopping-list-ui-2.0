import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

import { globalStyles } from '../../styles/globalStyles';
import { makeStyles } from '@mui/styles';
import { MenuItem } from '@mui/material';

export const AppBar = styled(MuiAppBar)({
    background: globalStyles.colors.reds.indianRed,
    marginTop: 20,
});

export const LinkContainer = styled(Link)({
    color: `${globalStyles.colors.grays.gainsboro}`,
    textDecoration: 'none',
});

export const MenuItemContainer = styled(MenuItem)({});

export const useStyles = makeStyles(() => ({
    icon: {
        color: `${globalStyles.colors.grays.gainsboro}`,
    },
}));
