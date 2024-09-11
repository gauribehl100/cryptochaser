import React, { useEffect, useState } from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
 import CoinInfo from '../Banner/CoinInfo';
import { SingleCoin } from '../Configuration/api';
import { numberWithCommas } from '../Banner/CoinsTable';
import { CryptoState } from '../CryptoContext';

// Styled components
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: '30%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 25,
  borderRight: '2px solid grey',
}));

const Heading = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: 20,
  fontFamily: 'Montserrat',
});

const Description = styled(Typography)({
  width: '100%',
  fontFamily: 'Montserrat',
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: 'justify',
});

const MarketData = styled(Box)(({ theme }) => ({
  alignSelf: 'start',
  padding: 25,
  paddingTop: 10,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    alignItems: 'start',
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
console.log(coin)
  useEffect(() => {
    fetchCoin();
    
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: 'gold' }} />;

  return (
    <Container>
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading variant="h3">{coin?.name}</Heading>
        <Description variant="subtitle1">
          {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
        </Description>
        <MarketData>
          <span style={{ display: 'flex' }}>
            <Heading variant="h5">Rank:</Heading>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat' }}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Heading variant="h5">Current Price:</Heading>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat' }}>
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Heading variant="h5">Market Cap:</Heading>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat' }}>
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </MarketData>
      </Sidebar>
      <CoinInfo coin={coin} />
    </Container>
  );
};

export default CoinPage;
