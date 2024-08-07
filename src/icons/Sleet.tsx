import React from 'react';
import {IIconProps} from "./IIconProps";

const Sleet: React.FC<IIconProps> = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.5 15.5H17.5M4.5 17.5H18.5M17.4079 13.4053H3.0988C1.54497 12.5689 1.01751 12.0134 1.00479 10.7878C0.975143 9.77714 1.07525 9.27106 1.52829 8.51929C2.2597 7.84148 2.67518 7.77096 3.4478 8.17029C3.32899 7.2768 3.69454 6.32308 3.79679 6.07626C3.97129 5.655 4.23749 5.4611 4.49481 5.20378C5.01829 4.68027 6.42105 4.02317 7.63582 4.68027C8.48036 2.78257 9.20522 1.98667 10.9513 1.19024C11.9983 0.841233 13.7433 1.01573 14.7904 1.36475C16.0915 1.77206 17.0354 2.58625 17.3844 3.91301C17.5824 5.20377 17.5824 5.72727 17.0354 6.87953C18.4974 6.80294 19.5019 7.82128 19.8509 9.04279C20.0254 10.2643 20.1303 10.7198 19.6764 11.8348C19.267 12.9252 18.6294 13.2308 17.4079 13.4053Z"
                stroke="white" strokeLinecap="round"/>
        </svg>
    );
};

export default Sleet;
