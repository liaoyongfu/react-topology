import React from 'react';
import { render } from 'react-dom';
import Topology from '../src';

const App: React.FC = () => {
    return (
        <div>
            <h1>React Topology</h1>
            <Topology data={[]} />
        </div>
    );
};

render(<App />, document.getElementById('root'));
