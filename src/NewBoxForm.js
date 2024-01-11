import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        backgroundColor: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData({
            width: '',
            height: '',
            backgroundColor: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Width:
                <input
                    type="text"
                    name='width'
                    value={formData.width}
                    onChange={handleChange}
                />
            </label>
            <label>Height:
                <input
                    type="text"
                    name='height'
                    value={formData.height}
                    onChange={handleChange}
                />
            </label>
            <label>Background Color:
                <input
                    type="text"
                    name='backgroundColor'
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Add Box</button>
        </form>
    );
}

export default NewBoxForm;