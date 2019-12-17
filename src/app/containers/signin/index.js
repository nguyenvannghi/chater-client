import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withApollo } from 'react-apollo';
import { Text, Box, Form, Button, Heading, FormField, TextInput } from 'grommet';
import useForm from 'react-hook-form';
import { FIELDS_SIGNIN } from './const';
import SignInSchema from './validators';
import { loginCall } from './saga/action';

const SignIn = ({ client, loginCall }) => {
    const { mutate } = client;
    const { register, handleSubmit, errors, watch } = useForm({ mode: 'onChange', validationSchema: SignInSchema });
    const onSubmit = useCallback(
        data => {
            loginCall(mutate, data);
        },
        [loginCall, mutate],
    );
    const disabledBtn = !!(
        errors[FIELDS_SIGNIN.NAME] ||
        errors[FIELDS_SIGNIN.PASSWORD] ||
        !watch()[FIELDS_SIGNIN.NAME] ||
        !watch()[FIELDS_SIGNIN.PASSWORD]
    );

    return (
        <>
            <Box
                fill="vertical"
                overflow="hidden"
                align="center"
                direction="column"
                background={{ color: 'brand', position: 'center' }}
                justify="center"
                hoverIndicator={false}
                gap="small"
                wrap={true}>
                <Box
                    align="center"
                    justify="center"
                    background={{ dark: false, color: 'white', position: 'center' }}
                    round={{ size: 'small' }}
                    border={{ size: 'xsmall', color: 'active' }}
                    pad="medium"
                    gap="xsmall"
                    direction="column">
                    <Text>Welcome</Text>
                    <Heading textAlign="center" size="medium" margin="none" level="2" color="brand">
                        CHATER
                    </Heading>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormField error={errors[FIELDS_SIGNIN.NAME] && errors[FIELDS_SIGNIN.NAME].message}>
                            <TextInput id="username" name="username" placeholder="username" size="small" ref={register} />
                        </FormField>
                        <FormField error={errors[FIELDS_SIGNIN.PASSWORD] && errors[FIELDS_SIGNIN.PASSWORD].message}>
                            <TextInput id="password" name="password" placeholder="pasword" size="small" type="password" ref={register} />
                        </FormField>
                        <Box align="center" justify="center">
                            <Button
                                label="Sign In"
                                disabled={disabledBtn}
                                primary
                                type="submit"
                                margin={{ vertical: 'medium', bottom: 'xsmall' }}
                            />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </>
    );
};

SignIn.propTypes = {
    SignInCall: PropTypes.func,
    loginCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => bindActionCreators({ loginCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(SignIn));
