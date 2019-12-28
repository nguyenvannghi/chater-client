import React from 'react';
import { Box, Button } from 'grommet';
import { Toast } from './Toast';

export const confirmTemplate = ({ onClose }) => (
    <Toast position="center" modal>
        <Box align="center">
            <Box width="small" margin="none" direction="row">
                <Box basis="1/2">
                    <Button plain color="dark-1" onClick={onClose}>
                        <Box pad="small" align="center" background="status-ok">
                            Accept
                        </Box>
                    </Button>
                </Box>
                <Box basis="1/2">
                    <Button plain color="dark-1" onClick={onClose}>
                        <Box pad="small" align="center" background="status-error">
                            Reject
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    </Toast>
);
