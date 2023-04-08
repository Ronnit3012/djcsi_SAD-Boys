import React from "react";

import { useState } from "react";

function Shop() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now use `selectedFile` to upload the image to your backend server
    // ...
  };

  return (
    <div>
      <div className="flex bg-blue-500 text-white text-4xl text-center mb-4 px-12 py-12 ">
        Here, you can Visualize your Bedrooms, kitchen and Drawing rooms and
        inspect upon the look!
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="block text-center mb-4 mr-12 px-12 py-12">
            <label
              className="block text-center text-2xl text-gray-700 font-bold mb-2 px-12 py-12"
              htmlFor="image"
            >
              Choose an image:
            </label>
            <input
              className="border text-lg rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
            />
          </div>
          <div className="flex justify-center">
            {previewUrl && (
              <img
                className="mt-4 rounded-lg shadow-lg w-2/5 px-11 py-11 "
                src={previewUrl}
                alt="Selected file preview"
              />
            )}
          </div>
          <div className="block text-center mb-4 mr-12 px-12 py-12">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center"
              type="submit"
              disabled={!selectedFile}
            >
              Upload Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Shop;
