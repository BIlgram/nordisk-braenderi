import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  inputGroup: {
    display: 'flex',
    flexFlow: 'row wrap',
    paddingBottom: 16,
  },
  input: {
    padding: [0, 8],
  },
  first: {
    paddingLeft: 0,
  },
  last: {
    paddingRight: 0,
  },
};

const InputGroup = injectSheet(styles)(({classes, children, ratio}) => {
  ratio = ratio.split(':');

  return (
      <div className={classes.inputGroup}>
        {React.Children.map(children, (child, i) => (
            React.cloneElement(child, {
              span: ratio[i],
              className: classNames(child.props.className, classes.input, {
                [classes.first]: i === 0,
                [classes.last]: i === React.Children.count(children) - 1,
              }),
            })
        ))}
      </div>
  );
});

InputGroup.defaultProps = {
  ratio: '12',
};

export default InputGroup;