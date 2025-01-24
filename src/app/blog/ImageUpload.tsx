// src/ImageUpload.tsx
import React, { useRef, useState } from "react";
import axios from "axios";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "greencare"); // Replace with your upload preset name

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dioamniv8/image/upload`, // Replace with your Cloudinary cloud name
        formData
      );
      setLoading(false);
      console.log("Uploaded image URL:", response.data.secure_url); // URL of the uploaded image
    } catch (err) {
      setLoading(false);
      setError("Upload failed. Please try again.");
      console.error(err);
    }
  };

  // Reference to the hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Trigger the hidden file input when the container is clicked
  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 cursor-pointer min-h-[20rem] mb-6"
      onClick={() => handleContainerClick()}
    >
      <div className="flex flex-col items-center p-4 max-h-120">
        {preview === "" && (
          <h2 className="text-xl font-bold">Upload Article image</h2>
        )}

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 p-2 border rounded hidden"
        />
        {/*   <button
          onClick={handleUpload}
          disabled={loading || !image}
          className={`py-2 px-4 rounded text-white transition-colors duration-300 ${
            loading || !image
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button> */}
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {preview && (
          <div className="mt-4 w-full max-w-xl max-h-56">
            <img src={preview} alt="Preview" className="max-h-60 " />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
