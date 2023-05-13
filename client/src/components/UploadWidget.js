import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import "../styles/UploadWidget.css";
import CloudGallery from "./cloudinary/CloudGallery";
import { Cloudinary } from "@cloudinary/url-gen";

function Widget() {
    const [imagesUploadedList, setImagesUploadedList] = useState([]);

    const cld = new Cloudinary({
        cloud: {
            cloud_name: "cloud_name", //Your cloud name
            upload_preset: "unsigned_upload_preset" //Create an unsigned upload preset and update this
        }
    });

    const onImageUploadHandler = (publicId) => {
        setImagesUploadedList((prevState) => [...prevState, publicId]);
    };

    const deleteAllImages = async () => {
        try {
            //You can call an API in your backend if you want to delete images.
            //This is the API you should call:
            //https://cloudinary.com/documentation/image_upload_api_reference#destroy
            // const responseData = await fetch(
            //   "http://localhost:5000/api/photos/delete"
            // );
            setImagesUploadedList([]);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="App">
            <button className="redButton" onClick={deleteAllImages}>
                Delete all images
            </button>
            <ImageUpload
                cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
                upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
                onImageUpload={(publicId) => onImageUploadHandler(publicId)}
            />
            <p>
                This mini project demonstrates the use of Upload widget +
                transformations on uploaded images in responsive way useing hooks in
                React
            </p>
            <CloudGallery
                imagesUploaded={imagesUploadedList}
                {...cld}
                cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
            />
        </div>
    );
    }

    export default Widget;