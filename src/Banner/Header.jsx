import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
    createTheme,
    ThemeProvider,
  } from '@mui/material';
  import { styled } from '@mui/system';
  import { useNavigate } from 'react-router-dom';
   import { CryptoState } from '../CryptoContext';
  
  // Styled components
  const Title = styled(Typography)({
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  });
  
  // Custom theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',  // This replaces `type: "dark"`
    },
  });
  
  function Header() {
    const { currency, setCurrency } = CryptoState();
    const navigate = useNavigate(); // useHistory is replaced with useNavigate in React Router v6
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Title variant="h6" onClick={() => navigate(`/`)}>
                Crypto Chaser
              </Title>
              <Select
                variant="outlined"
                value={currency}
                sx={{ width: 100, height: 40, marginLeft: 2 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;
  