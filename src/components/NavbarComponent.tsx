import { Container, Link } from '@mui/material';
import { Box } from '@mui/system';

function NavbarComponent() {
    return (
      <>
        <Container className="nav" maxWidth='md' sx={{p: 2}}>
              <Link href="/" 
                    underline="none" 
                    fontSize='1.1rem' 
                    fontFamily={'Montserrat'} 
                    fontWeight='500' 
                    letterSpacing={0.8}
                    color='#fff'>
                <Box component="span" fontWeight='700' color='#713eff'>C</Box>urrency
              </Link>
        </Container>
      </>
    );
  }
  
  export default NavbarComponent;
  