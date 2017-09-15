import React from 'react';
import {NavLink} from 'react-router-dom';
import injectSheet from 'react-jss';
import palette from '/imports/palette';

const styles = {
  link: {
    height: 36,
    display: 'flex',
    alignItems: 'center',
    padding: [0, 16],
    color: palette.blue.rgb().string(),
    '&:hover': {
      color: palette.blue.darken(.2).rgb().string(),
    },
  },
  active: {
    borderRadius: 4,
    background: palette.blue.rgb().string(),
    color: palette.shade.lighter.rgb().string(),
    cursor: 'default',
    '&:hover': {
      color: palette.shade.lighter.rgb().string(),
    },
  },
};

const NavigationLink = injectSheet(styles)(({classes, children, ...props}) => {
  delete props['sheet'];
  return (
      <li>
        <NavLink {...props}
                 className={classes.link}
                 activeClassName={classes.active}>
          {children}
        </NavLink>
      </li>
  );
});

export default NavigationLink;