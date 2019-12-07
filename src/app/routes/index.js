import React, { memo, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import history from './history';

// not support for server-side rendering
const Home = lazy(() => import('app/containers/home'));
const About = lazy(() => import('app/containers/about'));
const Login = lazy(() => import('app/containers/login'));
const UseReducer = lazy(() => import('app/containers/useReducer'));
const Chater = lazy(() => import('app/containers/chater'));

const Routers = () => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <nav>
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
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/">Chater</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/use-reducer">
                            <UseReducer />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Chater />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </ConnectedRouter>
    );
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(Routers);
