import AsyncComponent from 'app/components/_asynComponent/index';
import { RouterNoAuth } from './const';

const SignInAsync = AsyncComponent(() => import('app/containers/signin'));

const RoutersNoAuth = [
    {
        key: 'key_login',
        title: 'Login',
        path: RouterNoAuth.rLogin,
        component: SignInAsync,
    },
];

export default RoutersNoAuth;
