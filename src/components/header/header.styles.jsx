import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

import { globalStyles } from '../../styles/globalStyles';

export const AppBar = styled(MuiAppBar)({
    background: globalStyles.colors.basic.white,
    height: 80,
});
