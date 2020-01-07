import React from 'react';
import Item, { Data } from './Item';

export interface TopologyProps {
    data: Data[];
}

const Topology: React.FC<TopologyProps> = ({ data }: TopologyProps) => {
    const render = (node: Data[]) => {
        return node.map(item => {
            return (
                <div>
                    <Item data={item} />
                    {item.children && item.children && render(item.children)}
                </div>
            );
        });
    };
    return <div>{render(data)}</div>;
};

export default Topology;
