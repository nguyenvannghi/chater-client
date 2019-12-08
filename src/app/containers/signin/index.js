import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { Text, Box, Form, Button, Heading, FormField, TextInput } from 'grommet';
import useForm from 'react-hook-form';
import { FIELDS_SIGNIN } from './const';
import SignInSchema from './validators';
import { LOGIN } from './graphql/mutations';
import { loginAction } from './services';

const SignIn = () => {
    const { register, handleSubmit, errors, watch } = useForm({ mode: 'onChange', validationSchema: SignInSchema });
    const [muationLogin] = useMutation(LOGIN);

    const onSubmit = useCallback(data => loginAction(data, muationLogin), [muationLogin]);
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
};

export default memo(SignIn);
