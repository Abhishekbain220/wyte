import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-0B6C4ZFC72');
};

export const trackPage = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};