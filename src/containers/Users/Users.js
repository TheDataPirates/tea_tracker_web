import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User/User';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Users = (props)=>{
    const { onFetchUsers } = props;

    useEffect(() => {
        onFetchUsers();
    }, [onFetchUsers]);

    let users = <Spinner />;
    if (!props.loading) {
        users = props.users.map(user => (
            <User
                key={user.user_id}
                user_id={user.user_id}
                fname={user.fname}

            />
        ));
    }
    return <div>{users}</div>;
};

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading,
        // token: state.auth.token,
        // userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: (token, userId) =>
            dispatch(actions.fetchUsers())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Users, axios));