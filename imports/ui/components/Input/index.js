import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import uniqid from 'uniqid';
import palette from '/imports/palette';

const styles = {
  input: {
    marginBottom: 16,
    overflow: 'hidden',
    flexBasis: props => `${(100 / 12) * props.span}%`,
    textOverflow: 'ellipsis',
  },
  label: {
    height: 16,
    display: 'inline-block',
    lineHeight: '1em'
  },
  field: {
    width: '100%',
    height: 36,
    padding: [0, 12],
    borderRadius: 4,
    border: [1, 'solid', palette.black.fade(.875).string()],
    outline: 0,

    '&:focus': {
      borderColor: palette.blue.string(),
    },
  },
};

const Input = injectSheet(styles)(({classes, label, type, className, ...props}) => {
  delete props['sheet'];
  const id = uniqid();

  return (
      <div className={classNames(classes.input, className)}>
        <label htmlFor={id} className={classes.label}>{label}</label>
        <input id={id} className={classes.field} type={type}/>
      </div>
  );
});

Input.defaultProps = {
  type: 'text',
  span: 12,
};

export default Input;