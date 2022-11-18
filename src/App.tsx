import './App.css';
import {Box, Container, Typography, ThemeProvider} from '@mui/material';
import FormComponent from './components/FormComponent';
import theme from './assets/theme/theme';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import AlertComponent from './components/AlertComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="background">
          <div className='layer'>
            <NavbarComponent />
            <Container className="hero" sx={{px: {xs: 3, md: 3}, paddingBottom: '50px'}}>
              <Typography 
                component='h1' 
                variant='h3' 
                align='left' 
                fontFamily={'Montserrat'} 
                fontWeight='600' 
                color={'#fff'} 
                maxWidth='600px'
                marginTop={{xs: 6, sm: 8, md: 12}}
              >
                Converta seu dinheiro em poucos cliques
              </Typography>
              <Typography 
                component='p' 
                variant='subtitle1' 
                align='left' 
                fontFamily={'Montserrat'} 
                fontWeight='500'
                maxWidth='600px' 
                color={'#b9b9b9'} 
                paddingY={4}
              >
                Selecione a moeda e o valor desejado e deixa o Currency fazer o trabalho por você
              </Typography>
            </Container>
            <div className="content">
              <Container>
                <Box sx={{backgroundColor: '#fff', boxShadow: {xs: 0, sm: 0, md: 1}, p:4, marginTop: {xs: 0, sm: 0, md: 3}}}>
                  <FormComponent />
                </Box>
              </Container>
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
