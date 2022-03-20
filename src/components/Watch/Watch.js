import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = (props) => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }
    return (
        <div style={{ border: "2px solid green", margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Count Steps</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;