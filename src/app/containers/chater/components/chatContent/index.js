import React from 'react';
import { Box, Heading, Button, Image, Text, TextArea } from 'grommet';
import { Add, Apps, Accessibility } from 'grommet-icons';

const ChatContent = () => {
    return (
        <Box fill="vertical" overflow="hidden" align="center" background={{ color: 'black' }} direction="column" justify="between">
            <Box
                align="center"
                justify="center"
                alignSelf="stretch"
                background={{ color: 'white' }}
                border={{ color: 'border', side: 'bottom' }}
                pad={{ top: 'xsmall', bottom: 'xsmall', left: 'medium', right: 'medium' }}>
                <Box align="stretch" justify="start" direction="column" alignSelf="stretch" fill="vertical">
                    <Heading level="4" margin="none">
                        Toong Office
                    </Heading>
                    <Box align="center" justify="start" direction="row" margin={{ top: 'xsmall' }}>
                        <Button icon={<Accessibility />} plain={true} margin={{ right: 'xsmall' }} />
                        <Text size="small">4</Text>
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="between" fill="vertical" alignSelf="stretch">
                <Box
                    align="stretch"
                    justify="start"
                    direction="row-responsive"
                    alignSelf="stretch"
                    pad={{ horizontal: 'medium', vertical: 'small' }}
                    background={{ color: 'white' }}
                    overflow="auto"
                    wrap={true}>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        align="start"
                        justify="start"
                        direction="row-responsive"
                        fill="horizontal"
                        flex="shrink"
                        alignSelf="stretch"
                        margin={{ bottom: 'small' }}>
                        <Box align="center" justify="center" width="xxsmall" overflow="hidden" height="xxsmall" margin={{ top: 'xsmall' }}>
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box align="stretch" justify="start" direction="column" pad={{ left: 'small', right: 'small' }} fill="horizontal">
                            <Box align="center" justify="start" direction="row-responsive">
                                <Heading size="xsmall" level="4" margin="none">
                                    John Clare
                                </Heading>
                                <Text margin={{ left: 'small' }} size="xsmall">
                                    10:50 PM
                                </Text>
                            </Box>
                            <Box align="center" justify="center">
                                <Box align="center" justify="start" alignSelf="stretch" fill="vertical" direction="row-responsive">
                                    <Text size="small" textAlign="start">
                                        Như các bạn đã biết, tháng này muốn họp gì là phải sang WW nên Review + Retro + Planning vào thứ 2
                                        tới sẽ diễn ra ở bên đó. Check in, check out thì mình đang liên lạc Thảo chưa thấy Thảo online (se
                                        thông báo sau). Ps: đã đặt phòng họp từ 2:30 pm. Cụ thể hơn sẽ có trong mail mời nhé ace
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                align="end"
                justify="between"
                direction="row-responsive"
                fill="horizontal"
                alignSelf="stretch"
                pad="small"
                background={{ color: 'brand', dark: true }}
                flex="grow">
                <Box
                    align="center"
                    justify="start"
                    direction="row-responsive"
                    alignSelf="stretch"
                    fill="horizontal"
                    border={{ color: 'dark-4', size: 'xsmall' }}
                    round="xsmall"
                    background={{ color: 'white' }}
                    height="xxsmall">
                    <TextArea size="small" plain={true} />
                    <Button icon={<Apps />} />
                    <Button icon={<Add />} />
                </Box>
            </Box>
        </Box>
    );
};

export default ChatContent;
