import React from 'react';
import Topology from '../src';

const data = [
    {
        label: '微笑集团',
        children: [
            {
                label: '厦门微笑有限公司'
            },
            {
                label: '新加坡微笑有限公司'
            }
        ]
    }
];

export default {
    title: 'Topology'
};

export const base = () => <Topology data={data} />;
