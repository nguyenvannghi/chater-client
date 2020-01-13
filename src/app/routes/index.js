import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { isEmpty } from 'lodash';
import { makeSelectLoginStatus } from 'app/containers/signin/saga/selector';
import { loginCallSuccess } from 'app/containers/signin/saga/action';
import history from './history';
import { listCookieStorageName, getCookie } from '../_utils/cookieStorage';

import AllRouter from './routersApp';
import RoutersNoAuth from './routerNoAuth';
import { RouterApp, RouterNoAuth } from './const';

const Routers = () => {
    const dispatch = useDispatch();
    const isLoginStatus = useSelector(makeSelectLoginStatus());
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

    const routerListNoAuth = data => {
        const routers = [];
        data.forEach(route => {
            routers.push(onceRouter(route));
        });

        return routers;
    };

    useEffect(() => {
        if (!isEmpty(getCookie(listCookieStorageName.access_token))) {
            setIsLogin(true);
            if (!isLoginStatus) {
                dispatch(loginCallSuccess());
            }
        } else {
            setIsLogin(isLoginStatus);
        }
    }, [dispatch, isLoginStatus]);

    return (
        <ConnectedRouter history={history}>
            {!isLogin ? (
                <Switch>
                    {routerListNoAuth(RoutersNoAuth)}
                    <Redirect to={RouterNoAuth.rLogin} />
                </Switch>
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

export default memo(Routers);
