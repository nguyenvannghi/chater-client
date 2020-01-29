import React from 'react';
import './style.scss';

const LoadingComp = () => (
    <div className="box-loading">
        <div className="boxUserInfo">
            <div className="box-thumbnail" />
            <div className="box-line-sm" />
            <div className="box-line-xs" />
        </div>

        <div className="box-line-df" />
        <div className="box-line-lgx" />
        <div className="box-line-lg" />
    </div>
);

export default LoadingComp;
