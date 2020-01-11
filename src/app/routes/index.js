import React, { memo, lazy, useState, useEffect, Suspense } from 'react';
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
import LoadingComp from 'app/components/loadingComp';

import AllRouter from './routersApp';
import RouterApp from './const';

// not support for server-side rendering
const SignIn = lazy(() => import('app/containers/signin'));

const Routers = ({ isLoginStatus, loginCallSuccess }) => {
    const [isLogin, setIsLogin] = useState(false);

    const routesMatch = [];

    const onceRouter = route => <Route key={Math.random()} {...route} />;

    const routerListNav = data => {
        data.forEach(route => {
            if (Object.prototype.hasOwnProperty.call(route, 'sub')) {
                routerListNav(route.sub);
            } else if (Object.prototype.hasOwnProperty.call(route, 'childs')) {
                route.childs.forEach(item => {
                    routesMatch.push(onceRouter(item));
                });

                const routeParent = {
                    title: route.title,
                    path: route.path,
                    component: route.component,
                };
                routesMatch.push(onceRouter(routeParent));
            } else {
                routesMatch.push(onceRouter(route));
            }
        });

        return routesMatch;
    };

    useEffect(() => {
        if (!isEmpty(getCookie(listCookieStorageName.access_token))) {
            setIsLogin(true);
            if (!isLoginStatus) {
                loginCallSuccess();
            }
        } else {
            setIsLogin(isLoginStatus);
        }
    }, [isLoginStatus, loginCallSuccess]);

    return (
        <ConnectedRouter history={history}>
            {!isLogin ? (
                <Suspense fallback={<LoadingComp />}>
                    <Switch>
                        <Redirect to="/sign-in" />
                    </Switch>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                </Suspense>
            ) : (
                <>
                    {/* <nav>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/">Chater</Link>
                            </li>
                        </ul>
                    </nav> */}
                    {routerListNav(AllRouter)}
                    <Redirect path="*" to={RouterApp.rChater} />
                </>
            )}
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
