import React,{Fragment,useState}from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from'./Layout.module.css'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props)=> {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };


  return(<Fragment>
      <Toolbar
          // isAuth={props.isAuthenticated}
          drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
          // isAuth={props.isAuthenticated}
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
  </Fragment>);
};
export default Layout;
