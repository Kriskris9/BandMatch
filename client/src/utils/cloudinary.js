import { config } from "cloudinary-react";

config({
  cloud_name: "YOUR_CLOUD_NAME",
  api_key: "YOUR_API_KEY",
  api_secret: "YOUR_API_SECRET",
});

// import React from "react";
// import { ImageUpload } from "cloudinary-react";

// export const UploadWidget = ({ onUpload, buttonLabel }) => {
//   const handleUpload = (result) => {
//     const { event, info } = result;
//     if (event === "success" && info && info.secure_url) {
//       onUpload(info.secure_url, info.public_id);
//     }
//   };

//   return (
//     <div>
//       <ImageUpload
//         cloudName="YOUR_CLOUD_NAME"
//         uploadPreset="YOUR_UPLOAD_PRESET"
//         buttonText={buttonLabel}
//         onSuccess={handleUpload}
//         onFailure={handleUpload}
//         multiple={false}
//       />
//     </div>
//   );
// };
