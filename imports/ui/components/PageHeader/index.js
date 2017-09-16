import React from 'react';
import injectSheet from 'react-jss';
import palette from '/imports/palette';

import ButtonGroup from '/imports/ui/components/ButtonGroup';

const styles = {
  header: {
    display: 'flex',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottom: [1, 'solid', palette.black.fade(.875).string()],
  },
  headings: {
    flexGrow: 1,
  },
  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 300,
    lineHeight: '1em',
  },
  subtitle: {
    margin: [0, 0, 8],
    fontSize: 12,
    fontWeight: 300,
    lineHeight: '1em',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: palette.shade.gray.string(),
  },
  buttons: {
    alignItems: 'flex-end',
    flexShrink: 1,
  },
};

const PageHeader = injectSheet(styles)(({classes, title, subtitle, children}) => {
  return (
      <div className={classes.header}>
        <div className={classes.headings}>
          <h3 className={classes.subtitle}>{subtitle}</h3>
          <h2 className={classes.title}>{title}</h2>
        </div>
        <ButtonGroup className={classes.buttons}>
          {children}
        </ButtonGroup>
      </div>
  );
});

export default PageHeader;