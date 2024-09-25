import { Container, Typography, styled } from '@mui/material';
import Carousel from './Carousel';


const Banner = styled('div')(({ theme }) => ({
  backgroundImage: 'url(./banner2.jpg)',
  backgroundSize: 'cover', // Ensures the background image covers the entire element
  backgroundPosition: 'center', // Centers the background image
}));

const BannerContent = styled(Container)(({ theme }) => ({
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 25,
  justifyContent: 'space-around',
}));

const Tagline = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '40%',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}));

const BannerComponent = () => {
  return (
    <Banner>
      <BannerContent>
        <Tagline>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Tagline>
        <Carousel />
      </BannerContent>
    </Banner>
  );
};

export default Banner;
