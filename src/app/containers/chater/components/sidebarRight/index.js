import React from 'react';
import { Box, Heading, Button, Image, Paragraph } from 'grommet';
import { AddCircle, Actions } from 'grommet-icons';

const SidebarLeft = () => {
    return (
        <Box align="start" justify="start" background={{ opacity: 'medium', dark: false, color: 'brand' }} fill="vertical">
            <Box align="stretch" justify="start" background={{ opacity: 'strong' }} direction="column" fill="horizontal">
                <Box
                    align="baseline"
                    justify="between"
                    alignSelf="stretch"
                    direction="row-responsive"
                    pad={{ left: 'small', right: 'small' }}
                    background={{ dark: true }}>
                    <Heading level="4" size="xsmall" textAlign="start" margin="none" color="white">
                        Friends
                    </Heading>
                    <Button icon={<AddCircle />} color="white" type="button" />
                </Box>
                <Box align="center" justify="center" alignSelf="stretch" pad={{ top: 'small', bottom: 'small', right: 'medium' }}>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}
                        background={{ color: 'brand', opacity: 'medium', dark: true }}
                        round={{ corner: 'right', size: 'medium' }}>
                        <Box
                            align="center"
                            justify="start"
                            pad={{ left: 'xxsmall', right: 'xxsmall', top: 'xxsmall', bottom: 'xxsmall' }}
                            direction="row"
                            alignSelf="start"
                            fill="horizontal">
                            <Box
                                align="center"
                                justify="between"
                                width="xxsmall"
                                height="xxsmall"
                                round="large"
                                direction="row-responsive"
                                overflow="hidden"
                                margin={{ right: 'small' }}
                                alignSelf="center"
                                flex="grow">
                                <Image
                                    src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"
                                    fit="cover"
                                />
                            </Box>
                            <Box align="center" justify="between" direction="row-responsive" alignSelf="stretch" fill="horizontal">
                                <Heading margin="none" level="4" size="xsmall" textAlign="start">
                                    Nghi Web
                                </Heading>
                                <Button icon={<Actions />} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}
                        background={{ color: 'brand', opacity: 'medium', dark: true }}
                        round={{ corner: 'right', size: 'medium' }}>
                        <Box
                            align="center"
                            justify="start"
                            pad={{ left: 'xxsmall', right: 'xxsmall', top: 'xxsmall', bottom: 'xxsmall' }}
                            direction="row"
                            alignSelf="start"
                            fill="horizontal">
                            <Box
                                align="center"
                                justify="between"
                                width="xxsmall"
                                height="xxsmall"
                                round="large"
                                direction="row-responsive"
                                overflow="hidden"
                                margin={{ right: 'small' }}
                                alignSelf="center"
                                flex="grow">
                                <Image
                                    src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"
                                    fit="cover"
                                />
                            </Box>
                            <Box align="center" justify="between" direction="row-responsive" alignSelf="stretch" fill="horizontal">
                                <Heading margin="none" level="4" size="xsmall" textAlign="start">
                                    Nghi Web
                                </Heading>
                                <Paragraph size="small">1 phút trước</Paragraph>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SidebarLeft;
