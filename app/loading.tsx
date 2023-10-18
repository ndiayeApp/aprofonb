import React from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';


function Loading() {

          return (
                    <Container style={{
                              height: '100vh',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                    }}>
                              <Grid container direction="column" alignItems="center" spacing={2}>
                                        <Grid item>
                                                  <CircularProgress sx={{ color: "#00B27F" }} size={50} />
                                        </Grid>
                              </Grid>
                    </Container>
          );
}

export default Loading;
