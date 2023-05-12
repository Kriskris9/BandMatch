import React, { useState } from 'react';
import axios from 'axios';




const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            //HERE WE WILL UPDATE USER DATA/PROFILE DATA TO SHOW IMAGE

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

function SignUp() {
    return (
        <div>signup</div>
    )
};

export default { ImageUpload, SignUp };