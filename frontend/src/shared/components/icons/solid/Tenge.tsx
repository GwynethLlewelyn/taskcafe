import React from 'react';
import Icon, { IconProps } from '../Icon';

const Tenge: React.FC<IconProps> = (args) => {
    return (
        <Icon {...args} viewBox="0 0 384 512">
            <path d="M372 160H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h140v228c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V240h140c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12zm0-128H12C5.4 32 0 37.4 0 44v56c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12z" />
        </Icon>
    );
};

export default Tenge;