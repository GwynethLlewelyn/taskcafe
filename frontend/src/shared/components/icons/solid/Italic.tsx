import React from 'react';
import Icon, { IconProps } from '../Icon';

const Italic: React.FC<IconProps> = (args) => {
    return (
        <Icon {...args} viewBox="0 0 320 512">
            <path d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" />
        </Icon>
    );
};

export default Italic;