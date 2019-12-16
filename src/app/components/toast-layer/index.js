import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layer } from 'grommet';

const ToastLayer = ({ children, modal, position, full, ...rest }) => {
    return (
        <Layer position={position || 'top'} full={full} modal={modal} margin="none" responsive plain={!!modal} {...rest}>
            {children}
        </Layer>
    );
};

ToastLayer.propTypes = {
    children: PropTypes.any,
    modal: PropTypes.bool,
    position: PropTypes.oneOf([
        'bottom',
        'bottom-left',
        'bottom-right',
        'center',
        'hidden',
        'left',
        'right',
        'top',
        'top-left',
        'top-right',
    ]),
    full: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['vertical', 'horizontal'])]),
};

export default memo(ToastLayer);
