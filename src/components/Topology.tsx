import React from 'react';
import Item, { Data } from './Item';
import './Topology.less';

export interface TopologyProps {
    data: Data[];
}

const Topology = ({ data }: TopologyProps) => {
    const render = (node: Data[]) => {
        return node.map(item => {
            return (
                <div className="topology-level">
                    <Item data={item} />
                    {item.children && item.children && render(item.children)}
                </div>
            );
        });
    };
    return <div className="topology">{render(data)}</div>;
};

export default Topology;
