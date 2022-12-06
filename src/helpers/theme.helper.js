import { globalStyles } from '../styles/globalStyles';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        h1: { fontSize: 32, textTransform: 'uppercase' },
        h5: { fontSize: '1.2rem' },
    },
    palette: {
        mode: 'light',
        primary: { main: globalStyles.colors.reds.indianRed },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});
