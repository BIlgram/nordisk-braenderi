import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import palette from '/imports/palette';

const styles = {
  button: {
    width: props => props.form ? '100%' : 'auto',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [0, 16],
    borderRadius: 4,
    outline: 0,
    marginTop: props => props.form ? 16 : 0,
    border: props => `1px solid ${palette[props.color].string()}`,
    background: props => props.form ? palette[props.color].string() : 'transparent',
    color: props => props.form ? palette.white.string() : palette[props.color].string(),
    fill: props => props.form ? palette.white.string() : palette[props.color].string(),
    cursor: 'pointer',

    '&:hover': {
      background: props => props.form ? palette[props.color].darken(.1).string() : palette[props.color].string(),
      color: palette.white.string(),
    },

    '&:hover svg': {
      fill: palette.white.string(),
    },
  },
};

const Button = injectSheet(styles)(({classes, href, children, className, ...props}) => {
  delete props['sheet'];
  delete props['color'];
  delete props['form'];

  if (href) {
    return (
        <Link {...props}
              to={href}
              className={classNames(classes.button, className)}>
          {children}
        </Link>
    );
  }
  return (
      <button {...props}
              className={classNames(classes.button, className)}>
        {children}
      </button>
  );
});

Button.defaultProps = {
  form: false,
  color: 'blue',
};

export default Button;