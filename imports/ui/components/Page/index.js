import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    page: {
        opacity: 0,
        animation: 'fadein 0.1s forwards',
    },
    '@keyframes fadein': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 100,
        },
    },
};

const Page = injectSheet(styles)(({classes, children}) => {
    return (
        <div className={classes.page}>
            {children}
        </div>
    );
});

export default Page;

