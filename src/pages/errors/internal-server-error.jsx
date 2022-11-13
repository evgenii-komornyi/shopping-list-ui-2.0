import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';

export const InternalServerError = () => (
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
                    <Typography variant="h1">500</Typography>
                    <Typography variant="h6">
                        Something went wrong. Please, try again later...
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        src="https://img.freepik.com/free-vector/500-internal-server-error-concept-illustration_114360-5572.jpg?w=826&t=st=1663674298~exp=1663674898~hmac=d075d7b3f9b397d389da21c0f470c1a6876ba0552e7bc7aacd0d25ee4419a4d3"
                        alt=""
                        width={500}
                        height={500}
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
);
