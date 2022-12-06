import { makeStyles } from '@mui/styles';
import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles(() => ({
    title: {
        position: 'relative',

        '&:before': {
            position: 'absolute',
            content: '""',
            width: 70,
            height: 5,
            top: -10,
            background: globalStyles.colors.reds.indianRed,
        },
    },
}));
