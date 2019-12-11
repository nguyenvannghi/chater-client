import React, { useCallback } from 'react';
import { Box, Text, Button, Image, TextArea } from 'grommet';
import { AddCircle, Camera, Apps, Attachment, Add } from 'grommet-icons';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { MESSAGE_ADD_SUB } from '../../graphql/subscriptions';
import { CREATE_MESSAGE } from '../../graphql/mutation';
import { createMessageAction } from '../../service';

const ChatBox = () => {
    const { data, loading } = useSubscription(MESSAGE_ADD_SUB, { variables: {} });
    const [muationCreateMessage] = useMutation(CREATE_MESSAGE);

    const onSubmit = useCallback(() => {
        console.log(12312312);
        const data = {
            user_id: {
                _id: '5de8c412ea0603488de5eb0f',
            },
            room_id: {
                _id: '5deb22cf347d6f52a6b84a11',
            },
            message_body: 'Hello guys',
            message_status: true,
            created_by: {
                _id: '5de8c412ea0603488de5eb0f',
            },
        };
        return createMessageAction(data, muationCreateMessage), [muationCreateMessage];
    });

    return (
        <Box
            align="center"
            justify="start"
            fill="horizontal"
            alignSelf="stretch"
            background={{ dark: true, color: 'dark-1' }}
            overflow="hidden"
            flex="shrink">
            <Box
                align="center"
                justify="between"
                direction="row-responsive"
                alignSelf="stretch"
                border={{ color: 'dark-2', side: 'bottom' }}
                fill="horizontal"
                flex="grow">
                <Box align="center" justify="center" flex="shrink">
                    <Box
                        align="center"
                        justify="start"
                        direction="row-responsive"
                        alignSelf="stretch"
                        pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                        fill="horizontal"
                        flex="shrink"
                        background={{ opacity: 'medium' }}
                        hoverIndicator={true}>
                        <Box align="center" justify="center" height="xxsmall" width="xxsmall" overflow="hidden" flex="grow" round="full">
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box
                            align="stretch"
                            justify="start"
                            fill="horizontal"
                            alignSelf="stretch"
                            pad={{ left: 'small', right: 'small' }}
                            direction="column">
                            <Text weight="bold" size="small">
                                Emily Cook
                            </Text>
                            <Text size="xsmall">Online</Text>
                        </Box>
                    </Box>
                </Box>
                <Box align="center" justify="center">
                    <Box
                        align="center"
                        justify="between"
                        direction="row-responsive"
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small', vertical: 'small', top: 'small' }}>
                        <Button icon={<AddCircle />} />
                        <Button icon={<Camera />} />
                        <Button icon={<Apps />} />
                    </Box>
                </Box>
            </Box>
            <Box
                align="center"
                justify="center"
                fill="vertical"
                alignSelf="stretch"
                background={{
                    image: "url('http://xpanthersolutions.com/admin-templates/gappa/html/dark/assets/images/authentication-bg.jpg')",
                }}
                direction="row-responsive"
                overflow="hidden">
                <Box align="stretch" justify="start" direction="row-responsive" pad="small" overflow="auto" alignSelf="stretch" wrap={true}>
                    <Box
                        align="center"
                        justify="start"
                        margin={{ bottom: 'large' }}
                        fill="horizontal"
                        flex="shrink"
                        direction="row-responsive"
                        pad={{ right: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'brand', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'left' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="end" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="center"
                        justify="end"
                        margin={{ bottom: 'large' }}
                        flex="shrink"
                        fill="horizontal"
                        direction="row-responsive"
                        pad={{ left: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'dark-4', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'right' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="start" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="center"
                        justify="start"
                        margin={{ bottom: 'large' }}
                        flex="shrink"
                        fill="horizontal"
                        direction="row-responsive"
                        pad={{ right: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'brand', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'left' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="end" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="center"
                        justify="end"
                        margin={{ bottom: 'large' }}
                        flex="shrink"
                        fill="horizontal"
                        direction="row-responsive"
                        pad={{ left: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'dark-4', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'right' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="start" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="center"
                        justify="start"
                        margin={{ bottom: 'large' }}
                        flex="shrink"
                        fill="horizontal"
                        direction="row-responsive"
                        pad={{ right: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'brand', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'left' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="end" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="center"
                        justify="end"
                        margin={{ bottom: 'large' }}
                        flex="shrink"
                        fill="horizontal"
                        direction="row-responsive"
                        pad={{ left: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: 'brand', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: 'left' }}>
                                <Text size="small">Hello! please, let me know the status about project after school.</Text>
                            </Box>
                            <Box align="center" justify="end" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">4:18 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="start" alignSelf="stretch" border={{ color: 'dark-2', side: 'top' }}>
                <Box
                    align="center"
                    justify="center"
                    direction="row-responsive"
                    fill="horizontal"
                    flex="grow"
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'left' }}>
                    <TextArea plain={true} size="small" placeholder="Type a message..." />
                    <Button icon={<Attachment />} />
                    <Button icon={<Add />} onClick={onSubmit} />
                </Box>
            </Box>
        </Box>
    );
};

export default ChatBox;
