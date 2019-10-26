import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import actions from '../redux/auth/login/action';
import PropTypes from 'prop-types';
import {authSelector } from '../redux/auth/login/reducer';
import Login from '../containers/Login';

/**
 * 
 * @param {*} ComposedClass a component class 
 * @param {bool} reload distinguish between routes to 
 * allow show pages when he is log-in or not
 * @param {string} role role of user when he is @ /login
 * after login role determined By token  
 */
export default function (ComposedClass, reload, role = 'user') {
    class AuthClass extends PureComponent {
        UNSAFE_componentWillMount() {
            // console.log('will mount');
            /**
             * dispatch checkAuth
             * invoke 1 time
             */
            this.props.checkAuth();
        }
        UNSAFE_componentWillReceiveProps(nextProps) {
            /**
             * set state of loading after recieve props
             * @param {object} state - state of loading
             */

            /**
             * if auth has data it means response recieved
             */
            const {
                history
            } = this.props;
            if (nextProps.auth && nextProps.auth.isAuth) {
                /**
                 * if auth is  true and reload is "false"  it means user authenticated and
                 * should go to his "home page at dashboard"
                 */
                if (reload === false && nextProps.auth.role==="admin"  ) {
                    history.push('/admin');
                }
                if (reload === false && nextProps.auth.role!=="admin"  ) {
                    history.push('/');
                }

            }else {
                /**
                 * if auth is not true and reload is "true" go to login page
                 */
                if (reload) {
                    this.props.history.push('/login');
                }
            }
        }

        render() {
            console.log('render')

            if (this.props.auth && this.props.auth.isAuth ) {
                return (
                    <ComposedClass
                    />
                );
            }else{
                return (
                    <Login/>
                );
            }

            
        }
    }

    const mapStateToProps = (state) => {
        console.log(authSelector.isLoading(state))
        return {
            auth: authSelector.getData(state),
        };
    };
    AuthClass.propTypes = {
        auth: PropTypes.any,
        dispatch: PropTypes.func,
        history: PropTypes.object,
        updateProfile:PropTypes.func,
        updateProfileLoading:PropTypes.bool,
        logout:PropTypes.func,
        checkAuth:PropTypes.func,
        backCartable:PropTypes.func,
    };
    return connect(mapStateToProps,
        {
            logout:actions.logout,
            checkAuth:actions.checkAuth,
        })(AuthClass);

}

