import { styled } from '@mui/styles';

export const CartContainer = styled('div')({
    width: 325,
    height: '50vh',
    backgroundColor: '#fff',
    position: 'relative',
    padding: '20px 0 20px 20px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
});

export const CartHeader = styled('div')({
    fontSize: '12px',
    fontWeight: 'bold',
});

export const ItemsContainer = styled('div')({
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: '0 10px',

    '::-webkit-scrollbar': {
        width: '14px',
    },

    '::-webkit-scrollbar-thumb': {
        border: '4px solid rgba(0, 0, 0, 0)',
        backgroundClip: 'padding-box',
        borderRadius: '9999px',
        backgroundColor: '#aaaaaa',
    },
});

export const CartFooter = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
});

export const TotalContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '20px',
});

export const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    paddingRight: '20px',
});
