import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';

export const PageNotFoundError = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}
    >
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h6">
                        The page you’re looking for doesn’t exist.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1663585515~exp=1663586115~hmac=539d0c665ee4bc980264a47360c8f79f7894f7c502863a41d7e51d8e84bd14be"
                        alt=""
                        width={500}
                        height={500}
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
);
