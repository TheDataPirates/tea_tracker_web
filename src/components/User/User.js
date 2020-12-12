import React from "react";
import classes from './User.module.css';


const user = (props)=>{

    return(
        <div className={classes.Order}>
            <p>User ID: {props.user_id}</p>
            <p>First Name: <strong>{props.fname}</strong></p>
        </div>
    )
}
export default user;