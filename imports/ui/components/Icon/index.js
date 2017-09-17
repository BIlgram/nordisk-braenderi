import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import icons from 'production-control-icons';
import palette from '/imports/palette';

const styles = {
  icon: {
    width: props => props.width,
    height: props => props.height,
    display: 'inline-block',

    '& svg': {
      width: '100%',
      height: '100%',
      display: 'block',
      fill: props => props.fill,
    },
  },
};

const Icon = injectSheet(styles)(({classes, className, icon}) => {
  return (
      <div className={classNames(classes.icon, className)} dangerouslySetInnerHTML={{__html: icons[icon]}}/>
  );
});

Icon.defaultProps = {
  width: 16,
  height: 16,
  fill: palette.black.string(),
};

export default Icon;