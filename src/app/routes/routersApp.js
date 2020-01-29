import AsyncComponent from 'app/components/_asynComponent/index';
import { RouterApp } from './const';

// not support for server-side rendering
const AsyncHome = AsyncComponent(() => import('app/containers/home'));
const AsyncAbout = AsyncComponent(() => import('app/containers/about'));
const AsyncChater = AsyncComponent(() => import('app/containers/chater'));

const RoutersApp = [
    {
        key: 'key_home',
        title: 'Home',
        path: RouterApp.rHome,
        component: AsyncHome,
    },
    {
        key: 'key_about',
        title: 'About',
        path: RouterApp.rAbout,
        component: AsyncAbout,
    },
    {
        key: 'key_chater',
        title: 'Chater',
        path: RouterApp.rChater,
        component: AsyncChater,
    },
];

export default RoutersApp;
