import React from 'react';
import Icon, { IconProps } from '../Icon';

const Vest: React.FC<IconProps> = (args) => {
    return (
        <Icon {...args} viewBox="0 0 448 512">
            <path d="M437.252,239.877,384,160V32A32,32,0,0,0,352,0H320a24.021,24.021,0,0,0-13.312,4.031l-25,16.672a103.794,103.794,0,0,1-115.376,0l-25-16.672A24.021,24.021,0,0,0,128,0H96A32,32,0,0,0,64,32V160L10.748,239.877A64,64,0,0,0,0,275.377V480a32,32,0,0,0,32,32H192V288a31.987,31.987,0,0,1,1.643-10.119L207.135,237.4,150.188,66.564A151.518,151.518,0,0,0,224,86.234a151.55,151.55,0,0,0,73.812-19.672L224,288V512H416a32,32,0,0,0,32-32V275.377A64,64,0,0,0,437.252,239.877ZM131.312,371.312l-48,48a16,16,0,0,1-22.624-22.624l48-48a16,16,0,0,1,22.624,22.624Zm256,48a15.992,15.992,0,0,1-22.624,0l-48-48a16,16,0,0,1,22.624-22.624l48,48A15.993,15.993,0,0,1,387.312,419.312Z" />
        </Icon>
    );
};

export default Vest;