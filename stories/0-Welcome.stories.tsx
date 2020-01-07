import React from 'react';

export default {
    title: 'Welcome'
};

export const toStorybook = () => <div>Hello World</div>;

toStorybook.story = {
    name: 'to Storybook'
};
