import Zetachain from 'zetachain-sdk';

const zeta = new Zetachain({
  apiKey: process.env.ZETA_API_KEY,
  network: 'mainnet',
});

export default zeta;
