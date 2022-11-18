import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

function FooterComponent() {
    return (
      <>
        <Container className="footer" sx={{
                width: '100%',
                p: 2,
            }}>
              <Box
                sx={{
                }}
                >
                <Typography variant="subtitle1" sx={{
                  fontWeight: 500,
                  color: '#fff'
                }}>
                  Pedro Dell'Olio - 2022
                </Typography>
              </Box>
          </Container>
      </>
    );
  }
  
  export default FooterComponent;
  