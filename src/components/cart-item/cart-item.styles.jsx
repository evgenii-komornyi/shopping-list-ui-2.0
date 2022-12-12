import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

export const useStyles = makeStyles(() => ({
    imageContainer: {
        width: 100,
        height: 100,
    },
    image: {
        width: '100%',
    },
}));

export const CartItemContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
    padding: '10px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
});

export const ItemTitle = styled('div')(({ isOverlay }) => ({
    fontSize: isOverlay ? '12px' : '30px',
    fontWeight: 'normal',
    width: isOverlay ? '90px' : '100%',
    marginBottom: '10px',
}));

export const ItemBrand = styled('div')(({ isOverlay }) => ({
    fontSize: isOverlay ? '12px' : '30px',
    fontWeight: 'bold',
    width: isOverlay ? '90px' : '100%',
    marginBottom: '5px',
}));

export const ItemCategory = styled('div')(({ isOverlay }) => ({
    fontSize: isOverlay ? '12px' : '30px',
    fontWeight: 700,
    width: isOverlay ? '90px' : '100%',
    marginBottom: '10px',
}));

export const PriceContainer = styled('div')(({ isOverlay }) => ({
    fontSize: isOverlay ? '14px' : '30px',
    fontWeight: isOverlay ? 'normal' : 'bold',
    margin: '10px 0',
}));

export const CartItemDescriptionContainer = styled('div')(({ isOverlay }) => ({
    width: isOverlay ? 'auto' : '201px',
}));

export const QuantityContainer = styled('div')(({ isOverlay }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: !isOverlay ? 'relative' : 'inherit',
    left: !isOverlay ? '250px' : 0,
}));
