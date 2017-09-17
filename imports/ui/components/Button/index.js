import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import palette from '/imports/palette';

const styles = {
  button: {
    width: props => props.submit ? '100%' : 'auto',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [0, 16],
    borderRadius: 4,
    outline: 0,
    marginTop: props => props.submit ? 16 : 0,
    border: props => `1px solid ${palette[props.color].string()}`,
    background: props => props.submit ? palette[props.color].string() : 'transparent',
    color: props => props.submit ? palette.white.string() : palette[props.color].string(),
    cursor: 'pointer',

    '& svg': {
      fill: props => props.submit ? palette.white.string() : palette[props.color].string(),
    },

    '&:hover': {
      background: props => props.submit ? palette[props.color].darken(.1).string() : palette[props.color].string(),
      color: palette.white.string(),
    },

    '&:hover svg': {
      fill: palette.white.string(),
    },
  },
};

const Button = injectSheet(styles)(({classes, href, submit, children, className, ...props}) => {
  delete props['sheet'];
  delete props['color'];
  delete props['submit'];

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
              type={submit ? 'submit' : 'button'}
              className={classNames(classes.button, className)}>
        {children}
      </button>
  );
});

Button.defaultProps = {
  submit: false,
  color: 'blue',
};

export default Button;