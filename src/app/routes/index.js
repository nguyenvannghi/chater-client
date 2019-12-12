import React, { memo, lazy, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';
import history from './history';
import { listCookieStorageName, getCookie } from '../_utils/cookieStorage';

// not support for server-side rendering
const Home = lazy(() => import('app/containers/home'));
const About = lazy(() => import('app/containers/about'));
const SignIn = lazy(() => import('app/containers/signin'));
const Chater = lazy(() => import('app/containers/chater'));

const Routers = () => {
    const [isLogin, setIsLogin] = useState(false);
    if (!isEmpty(getCookie(listCookieStorageName.access_token)) && !isLogin) {
        setIsLogin(true);
    }
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

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(Routers);
