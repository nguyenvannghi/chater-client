import React from 'react';
import { Box, Text, Button, Image, TextInput } from 'grommet';
import { Clear, Search, Chat, Archive, User, SettingsOption } from 'grommet-icons';

const Sidebar = () => {
    return (
        <Box
            align="stretch"
            justify="between"
            fill="vertical"
            alignSelf="stretch"
            direction="column"
            background={{ color: 'dark-1', dark: true }}
            overflow="hidden"
            flex="shrink">
            <Box
                align="center"
                justify="center"
                background={{ color: 'dark-1' }}
                alignSelf="stretch"
                flex="grow"
                border={{ color: 'dark-2', side: 'right' }}>
                <Box
                    align="center"
                    justify="start"
                    direction="row-responsive"
                    alignSelf="stretch"
                    pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                    border={{ color: 'dark-2', side: 'bottom' }}>
                    <Box align="center" justify="start" alignSelf="stretch" direction="row-responsive" flex="grow">
                        <Box align="center" justify="center" height="xxsmall" width="xxsmall" overflow="hidden" round="xsmall">
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Text size="xlarge" margin={{ left: 'small', right: 'small' }} weight="bold">
                            Chater
                        </Text>
                    </Box>
                    <Button icon={<Clear />} />
                </Box>
                <Box
                    align="center"
                    justify="center"
                    pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'bottom' }}>
                    <Box
                        align="center"
                        justify="center"
                        alignSelf="stretch"
                        direction="row-responsive"
                        round="small"
                        border={{ color: 'dark-5' }}
                        background={{ color: 'dark-2', dark: true }}
                        height="xxsmall"
                        pad={{ left: 'xsmall', right: 'small' }}>
                        <TextInput placeholder="Search" plain={true} size="small" type="text" />
                        <Button icon={<Search />} plain={true} />
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="between" alignSelf="stretch" overflow="hidden" direction="row-responsive" fill="vertical">
                <Box
                    align="stretch"
                    justify="start"
                    alignSelf="stretch"
                    direction="row-responsive"
                    overflow="auto"
                    pad={{ vertical: 'small' }}
                    wrap={true}>
                    <Box
                        align="center"
                        justify="start"
                        direction="row-responsive"
                        alignSelf="stretch"
                        pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                        fill="horizontal"
                        flex="shrink"
                        background={{ color: 'dark-3', opacity: 'medium' }}
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
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
                            <Text size="small" truncate={true} color="dark-5">
                                Waiting for module 1 to finish...
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                02:54 PM
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="center" border={{ color: 'dark-2', side: 'top' }}>
                <Box
                    align="center"
                    justify="between"
                    direction="row-responsive"
                    alignSelf="stretch"
                    pad={{ left: 'small', right: 'small', vertical: 'small', top: 'small' }}>
                    <Button icon={<Chat />} />
                    <Button icon={<Archive />} />
                    <Button icon={<User />} />
                    <Button icon={<SettingsOption />} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
