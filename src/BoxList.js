import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    };

    const removeBox = (index) => {
        setBoxes((prevBoxes) => prevBoxes.filter((_, i) =>
            i !== index));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map((box, index) => (
                <Box
                    key={index} {...box}
                    removeBox={() => removeBox(index)} />
            ))}
        </div>
    );
}

export default BoxList;