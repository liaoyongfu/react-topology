import React from 'react';

export interface Data {
    label: string;
    children?: Data[];
}

const defaultProps = {
    data: []
};
type ItemProps = {
    // 自定义渲染函数
    render?: (data: object) => React.ReactElement;
    // 数据模型
    data: Data;
    className?: string;
} & typeof defaultProps;

const Item = ({ render, data, className }: ItemProps) => {
    const { label } = data;
    if (render) {
        return render(data);
    }
    return (
        <div className={className}>
            <div>{label}</div>
        </div>
    );
};

Item.defaultProps = defaultProps;

export default Item;
