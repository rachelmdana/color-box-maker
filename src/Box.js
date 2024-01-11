import React from 'react';

function Box({ width, height, backgroundColor, removeBox }) {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        marginBottom: '10px',
    };

    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;