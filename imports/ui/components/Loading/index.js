import React from 'react';
import injectSheet from 'react-jss';

import Icon from '/imports/ui/components/Icon';

const styles = {
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      animation: 'spin .75s linear infinite',
    },
  },

  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

const Loading = injectSheet(styles)(({classes}) => {
  return (
      <div className={classes.loading}>
        <Icon width={32} height={32} icon="loading"/>
      </div>
  );
});

export default Loading;