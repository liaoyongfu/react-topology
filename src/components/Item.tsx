import React from 'react';

export interface Data {
    label: string;
    children?: Data[];
}

export interface ItemProps {
    // 自定义渲染函数
    render?: (data: object) => React.ReactElement;
    // 数据模型
    data: Data;
}

const Item = ({ render, data }: ItemProps) => {
    const { label } = data;
    if (render) {
        return render(data);
    }
    return (
        <div>
            <div>{label}</div>
        </div>
    );
};

export default Item;
