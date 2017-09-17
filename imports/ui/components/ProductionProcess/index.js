import React from 'react';
import injectSheet from 'react-jss';
import productionSteps from '/imports/productionSteps';
import palette from '/imports/palette';
import translate from '/imports/i18n';

import Button from '/imports/ui/components/Button';
import Icon from '/imports/ui/components/Icon';

const styles = {
  process: {},
  label: {
    height: 16,
    display: 'inline-block',
    fontWeight: 500,
    lineHeight: '1em',
  },
  step: {
    display: 'flex',
  },
  select: {
    height: 36,
    flexGrow: 1,
    padding: [0, 12],
    borderRadius: 4,
    marginBottom: 4,
    border: [1, 'solid', palette.black.fade(.875).string()],
    outline: 0,
    textTransform: 'capitalize',
    '&:focus': {
      borderColor: palette.blue.string(),
    },
  },
  removeButton: {
    width: 36,
    height: 36,
    background: 'transparent',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    '& svg': {
      fill: palette.black.fade(.875).string(),
    },
    '&:hover svg': {
      fill: palette.black.fade(.5).string(),
    },
  },
  addButton: {
    width: '100%',
    marginTop: 8,
    marginBottom: 32,
  },
};

const ProductionProcess = injectSheet(styles)(({classes, value, onChange, ...props}) => {
  const handleSelectChange = (i, event) => {
    value[i] = event.target.value;
    onChange(value);
  };

  const handleRemoveClick = (i) => {
    value.splice(i, 1);
    onChange(value);
  };

  const handleAddClick = () => {
    value.push(productionSteps[0]);
    onChange(value);
  };

  return (
      <div className={classes.process}>
        <div className={classes.label}>Productionprocess</div>
        {value.map((state, i) => (
            <div key={i} className={classes.step}>
              <select value={state}
                      className={classes.select}
                      onChange={handleSelectChange.bind(this, i)}>
                {productionSteps.map((step, i) => (
                    <option key={i} value={step}>{translate('batch', step)}</option>
                ))}
              </select>
              <button type="button"
                      className={classes.removeButton}
                      onClick={handleRemoveClick.bind(this, i)}>
                <Icon icon="cross"/>
              </button>
            </div>
        ))}
        <Button className={classes.addButton} onClick={handleAddClick}>Tilføj</Button>
      </div>
  );
});

export default ProductionProcess;