import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  buttonGroup: {
    display: 'flex',
  },
  button: {
    marginLeft: -1,
    borderRadius: 0,
  },
  first: {
    borderRadius: [4, 0, 0, 4],
  },
  last: {
    borderRadius: [0, 4, 4, 0],
  },
};

const ButtonGroup = injectSheet(styles)(({classes, className, children}) => {
  return (
      <div className={classNames(classes.buttonGroup, className)}>
        {React.Children.map(children, (child, i) => (
            React.cloneElement(child, {
              className: classNames(child.props.className, {
                [classes.first]: i === 0,
                [classes.button]: i > 0,
                [classes.last]: i === React.Children.count(children) - 1,
              }),
            })
        ))}
      </div>
  );
});

export default ButtonGroup;