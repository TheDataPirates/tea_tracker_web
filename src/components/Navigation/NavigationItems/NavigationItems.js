import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        <NavigationItem link="/reports">Reports</NavigationItem>
        <NavigationItem link="/suppliers">Suppliers</NavigationItem>
        <NavigationItem link="/machines">Machines</NavigationItem>
        <NavigationItem link="/users">Users</NavigationItem>
    </ul>
);

export default navigationItems;