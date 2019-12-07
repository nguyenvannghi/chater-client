import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Box, Form, Button, FormField, TextInput } from 'grommet';
import useForm from 'react-hook-form';
import { FIELDS_SIGNIN } from './const';
import { loginCall } from './action';
import SignInSchema from './validators';
import injectReducerSaga from './injectReducerSaga';

const Login = ({ loginCall }) => {
    injectReducerSaga();
    const { register, handleSubmit, errors, watch } = useForm({ mode: 'onChange', validationSchema: SignInSchema });

    const onSubmit = useCallback(
        async data => {
            try {
                await loginCall({ [FIELDS_SIGNIN.NAME]: data[FIELDS_SIGNIN.NAME], [FIELDS_SIGNIN.PASSWORD]: data[FIELDS_SIGNIN.PASSWORD] });
            } catch (error) {
                console.log(error);
            }
        },
        [loginCall],
    );
    const disabledBtn = !!(
        errors[FIELDS_SIGNIN.NAME] ||
        errors[FIELDS_SIGNIN.PASSWORD] ||
        !watch()[FIELDS_SIGNIN.NAME] ||
        !watch()[FIELDS_SIGNIN.PASSWORD]
    );
    return (
        <>
            <Grid
                areas={[{ name: 'login', start: [1, 0], end: [1, 0] }]}
                columns={['small', 'flex', 'medium']}
                rows={['medium', 'small']}
                gap="small">
                <Box gridArea="login" full="vertical" justify="center">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Login</h1>
                        <span>test/test</span>
                        <br />
                        <span>tainm/Mtai12345@</span>
                        <fieldset>
                            <p>blah blah</p>
                            <FormField label="Username" error={errors[FIELDS_SIGNIN.NAME] && errors[FIELDS_SIGNIN.NAME].message}>
                                <TextInput id="username" name="username" placeholder="type username here" ref={register} />
                            </FormField>
                            <FormField label="Password" error={errors[FIELDS_SIGNIN.PASSWORD] && errors[FIELDS_SIGNIN.PASSWORD].message}>
                                <TextInput id="password" type="password" name="password" placeholder="type password here" ref={register} />
                            </FormField>
                        </fieldset>
                        <Button disabled={disabledBtn} type="submit" label="SignIn" primary />
                    </Form>
                </Box>
            </Grid>
        </>
    );
};

Login.propTypes = {
    loginCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => bindActionCreators({ loginCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Login);
