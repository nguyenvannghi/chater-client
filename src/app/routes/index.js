import React, { memo, lazy, Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';
import history from './history';
import { listCookieStorageName, getCookie } from '../_utils/cookieStorage';
import { makeSelectLoginStatus } from 'app/containers/signin/saga/selector';
import { loginCallSuccess } from 'app/containers/signin/saga/action';

// not support for server-side rendering
const Home = lazy(() => import('app/containers/home'));
const About = lazy(() => import('app/containers/about'));
const SignIn = lazy(() => import('app/containers/signin'));
const Chater = lazy(() => import('app/containers/chater'));

const Routers = ({ isLoginStatus, loginCallSuccess }) => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (!isEmpty(getCookie(listCookieStorageName.access_token))) {
            setIsLogin(true);
            if (!isLoginStatus) {
                loginCallSuccess();
            }
        } else {
            setIsLogin(isLoginStatus);
        }
    }, [isLoginStatus, setIsLogin, isLogin, loginCallSuccess]);

    return (
        <ConnectedRouter history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                {!isLogin ? (
                    <>
                        <Switch>
                            <Redirect to="/sign-in" />
                        </Switch>

                        <Route path="/sign-in">
                            <SignIn />
                        </Route>
                    </>
                ) : (
                    <>
                        {/* <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">useState</Link>
                                </li>
                                <li>
                                    <Link to="/use-reducer">UseReducer</Link>
                                </li>
                                <li>
                                    <Link to="/sign-in">SignIn</Link>
                                </li>
                                <li>
                                    <Link to="/">Chater</Link>
                                </li>
                            </ul>
                        </nav> */}
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Chater />
                            </Route>
                            <Route path="/home">
                                <Home />
                            </Route>
                        </Switch>
                    </>
                )}
            </Suspense>
        </ConnectedRouter>
    );
};

Routers.propTypes = {
    isLoginStatus: PropTypes.bool,
    loginCallSuccess: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    isLoginStatus: makeSelectLoginStatus(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ loginCallSuccess }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Routers);
