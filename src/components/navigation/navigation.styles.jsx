import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

import { globalStyles } from '../../styles/globalStyles';

export const AppBar = styled(MuiAppBar)({
    background: globalStyles.colors.reds.indianRed,
    marginTop: 20,
});

export const LinkContainer = styled(Link)({
    color: `${globalStyles.colors.grays.gainsboro}`,
    textDecoration: 'none',
});
