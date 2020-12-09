import React from 'react';

import teaLogo from '../../assets/images/tea.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={teaLogo} alt="my logo" />
    </div>
);

export default logo;