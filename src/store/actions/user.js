import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchUsersSuccess = ( users ) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsers = (token, userId) => {
    return dispatch => {
        dispatch(fetchUsersStart());

        axios.get( '/user/users' )
            .then( res => {
                console.log(res.data.users);
                const fetchedUsers = [];
                // for ( let key in res.data.users ) {
                //     fetchedUsers.push( {
                //         ...res.data.users[key],
                //         id: key
                //     } );
                // }
                dispatch(fetchUsersSuccess(res.data.users));
            } )
            .catch( err => {
                dispatch(fetchUsersFail(err));
            } );
    };
};