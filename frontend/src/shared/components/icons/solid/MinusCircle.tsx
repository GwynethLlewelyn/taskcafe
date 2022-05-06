import React from 'react';
import Icon, { IconProps } from '../Icon';

const MinusCircle: React.FC<IconProps> = (args) => {
    return (
        <Icon {...args} viewBox="0 0 512 512">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" />
        </Icon>
    );
};

export default MinusCircle;