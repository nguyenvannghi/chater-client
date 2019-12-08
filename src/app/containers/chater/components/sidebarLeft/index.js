import React from 'react';
import { Box, Heading, Button, Image, Paragraph } from 'grommet';
import { AddCircle } from 'grommet-icons';

const SidebarLeft = () => {
    return (
        <Box
            align="stretch"
            justify="between"
            direction="row"
            fill="vertical"
            background={{ dark: true, color: 'brand', opacity: 'medium' }}>
            <Box align="stretch" justify="start" background={{ opacity: 'strong' }} direction="column" fill="horizontal">
                <Box
                    align="start"
                    justify="start"
                    background={{
                        image: "url('https://seantheme.com/color-admin/admin/assets/css/default/images/cover-sidebar-user.jpg')",
                    }}
                    pad={{ left: 'small', right: 'small', top: 'small', bottom: 'small' }}
                    direction="row"
                    alignSelf="stretch">
                    <Box
                        align="center"
                        justify="center"
                        width="xsmall"
                        height="xsmall"
                        round="large"
                        direction="row-responsive"
                        overflow="hidden"
                        margin={{ right: 'medium' }}>
                        <Image
                            src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"
                            fit="cover"
                        />
                    </Box>
                    <Box align="start" justify="center" direction="column" alignSelf="start">
                        <Heading margin="none" level="2" size="medium">
                            Nghi Web
                        </Heading>
                        <Paragraph>Frontend Developer</Paragraph>
                    </Box>
                </Box>
                <Box
                    align="baseline"
                    justify="between"
                    alignSelf="stretch"
                    direction="row-responsive"
                    pad={{ left: 'small', right: 'small' }}>
                    <Heading level="4" size="xsmall" textAlign="start" margin="none">
                        Channels
                    </Heading>
                    <Button icon={<AddCircle />} />
                </Box>
                <Box align="center" justify="center" alignSelf="stretch" pad={{ top: 'small', bottom: 'small' }}>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}
                        background={{ color: 'brand', dark: true, opacity: 'medium' }}>
                        <Heading level="5" textAlign="start" margin="none">
                            #toong office
                        </Heading>
                        <Button label="1" type="button" primary={true} color="status-error" fill="vertical" />
                    </Box>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}>
                        <Heading level="5" textAlign="start" margin="none">
                            #toong office
                        </Heading>
                        <Button label="1" type="button" primary={true} color="status-error" fill="vertical" />
                    </Box>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}>
                        <Heading level="5" textAlign="start" margin="none">
                            #toong office
                        </Heading>
                        <Button label="1" type="button" primary={true} color="status-error" fill="vertical" />
                    </Box>
                    <Box
                        align="baseline"
                        justify="between"
                        direction="row-responsive"
                        margin={{ bottom: 'xsmall' }}
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small' }}>
                        <Heading level="5" textAlign="start" margin="none">
                            #toong office
                        </Heading>
                        <Button label="1" type="button" primary={true} color="status-error" fill="vertical" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SidebarLeft;
