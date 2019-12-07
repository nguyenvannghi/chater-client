import * as Yup from 'yup';
import { FIELDS_SIGNIN } from './const';

const SignInSchema = Yup.object().shape({
    [FIELDS_SIGNIN.NAME]: Yup.string().required('Title is required.'),
    [FIELDS_SIGNIN.PASSWORD]: Yup.string().required('Title is required.'),
});
export default SignInSchema;
