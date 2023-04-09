import React, { useState } from "react";
import axios from "axios";
import { Footer, Header, Navbar } from "../components";

const Analysis = ({ paint }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [location, setLocation] = useState("");

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formProps = Object.fromEntries(formData);
    formData.append("filename", formProps.picture.name);
    formData.append("color", paint.hex);

    try {
      const response = await axios.post(
        "http://localhost:8000/paint/wall",
        formData
      );
      console.log(response.data);
      setLocation(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = () => {
    setLocation("");
  };

  return (
    <>
      <main className="mt-4">
        <div className="bg-blue-500">
          <p className="flex text-white text-4xl text-center mt-8 px-12 pt-8">
            Here, you can Visualize your Bedrooms, kitchen and Drawing rooms and
            inspect upon the look!
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div
                onChange={handleChange}
                className="flex justify-center items-center gap-5 my-8 pb-4"
              >
                <label
                  className="block text-center text-2xl text-gray-700 font-bold"
                  htmlFor="image"
                >
                  Choose an image:
                </label>
                <input
                  className="border text-lg rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  name="picture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                />
              </div>
              <div className="flex justify-center gap-8 pb-4">
                {previewUrl && (
                  <div className="w-2/5">
                    <img
                      className="mt-4 rounded-lg bg-slate-100 shadow-lg p-4 "
                      src={previewUrl}
                      alt="Selected file preview"
                    />
                    <p className="flex justify-center pt-4 text-slate-50 text-xl">
                      Original Image
                    </p>
                  </div>
                )}
                {location && (
                  <div className="w-2/5">
                    <img
                      className="mt-4 rounded-lg bg-slate-100 shadow-lg p-4 "
                      src={`http://localhost:8000/annotated_images/${location}`}
                      alt="annotated file preview"
                    />
                    <p className="flex justify-center pt-4 text-slate-50 text-xl">
                      Annotated Image <br />
                      Name: {paint.name} <br />
                      Hex code: {paint.hex}
                    </p>
                  </div>
                )}
              </div>
              {!location && (
                <div className="block text-center px-12 py-12">
                  <button
                    className="cursor-pointer inline-flex font-bold justify-center items-center py-3 px-5 mr-3 text-base text-center text-slate-50 rounded-lg bg-slate-900 ease-in-out delay-100 hover:bg-black focus:ring-4 focus:ring-black"
                    type="submit"
                    disabled={!selectedFile}
                  >
                    Upload Image
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Analysis;
