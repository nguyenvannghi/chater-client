import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Layer } from 'grommet';
import { createStructuredSelector } from 'reselect';

import makeSelectLoading from './selector';

const spinning = (
    <svg version="1.1" viewBox="0 0 32 32" width="28px" height="28px" fill="#7D4CDB">
        <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
        </path>
    </svg>
);

const LoadingApp = ({ isLoading }) => {
    return isLoading && <Layer className="bg-transparent">{spinning}</Layer>;
};

LoadingApp.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
    isLoading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(LoadingApp);
