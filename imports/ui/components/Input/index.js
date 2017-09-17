import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import uniqid from 'uniqid';
import palette from '/imports/palette';

const styles = {
  input: {
    paddingBottom: 16,
    overflow: 'hidden',
    flexBasis: props => `${(100 / 12) * props.span}%`,
    textOverflow: 'ellipsis',
  },
  label: {
    height: 16,
    display: 'inline-block',
    fontWeight: 500,
    lineHeight: '1em',
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

@injectSheet(styles)
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.id = uniqid();
  }

  render() {
    const {classes, label, className, ...props} = this.props;

    delete props['sheet'];
    delete props['span'];

    return (
        <div className={classNames(classes.input, className)}>
          <label htmlFor={this.id} className={classes.label}>{label}</label>
          <input id={this.id} className={classes.field} {...props}/>
        </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  span: 12,
};

export default Input;