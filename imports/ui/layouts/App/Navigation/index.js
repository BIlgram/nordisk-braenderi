import React from 'react';
import injectSheet from 'react-jss';
import palette from '/imports/palette';

import Link from './Link';

const styles = {
  navigation: {
    flex: '0 0 256px',
    padding: 16,
    boxSizing: 'content-box',
    fontSize: 14,
    '& ul': {
      padding: 0,
    },
    '& li': {
      display: 'block',
    },
    '& span': {
      height: 36,
      display: 'flex',
      alignItems: 'center',
      padding: [0, 16],
      marginTop: 16,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: palette.shade.gray.rgb().string(),
      fontSize: 12,
    },
  },
  logo: {
    fontSize: 24,
    fontWeight: 300,
    padding: [0, 16],
    margin: [0, 0, 16],
    lineHeight: '1em',
  },
};

const Navigation = injectSheet(styles)(({classes}) => {
  return (
      <div className={classes.navigation}>
        <h1 className={classes.logo}>Nordisk Brænderi</h1>
        <ul>
          <li>
            <span>Produktion</span>
            <ul>
              <Link exact to="/batches">Oversigt</Link>
              <Link exact to="/batches/create">Opret</Link>
            </ul>
          </li>
          <li>
            <span>Opgørelser</span>
            <ul>
              <Link exact to="/statements/yearly">Årsopgørelse</Link>
              <Link exact to="/statements/quarterly">Kvartalsopgørelse</Link>
              <Link exact to="/statements/monthly">Månedsopgørelse</Link>
            </ul>
          </li>
          <li>
            <span>Administration</span>
            <ul>
              <Link exact to="/users">Brugere</Link>
              <Link exact to="/spirits">Spiritustyper</Link>
            </ul>
          </li>
        </ul>
      </div>
  );
});

export default Navigation;