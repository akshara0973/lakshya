import React, { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace with your actual image paths
  const images = [
    "/img/about.jpg",
    "/img/carousel-3.jpeg",
    "/img/c6.jpg",
    "/img/bggp.jpg",
    "/img/g7.jpeg",
    "/img/carousel-2.jpg",
    "/img/g2.jpeg",
    "/img/g1.jpeg",
    "/img/carousel-2.jpg",
    "/img/c2.jpg",
    "/img/g4.jpeg",
    "/img/g5.jpeg",
    "/img/g6.jpeg",
    "/img/g7.jpeg",
    "/img/g8.jpeg",
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <style>
        {`
          /* Container for the gallery */
          .gallery-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
            background-color: #f4f4f4;
          }

          /* Individual gallery item */
          .gallery-item img {
            width: 100%;
            height: auto;
            max-height: 200px; /* Sets a consistent max height for the images */
            border-radius: 10px;
            cursor: pointer;
            object-fit: cover; /* Ensures images fit nicely within the area */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .gallery-item img:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          }

          /* Lightbox styles */
          .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .lightbox img {
            max-width: 90%;
            max-height: 80%;
            border-radius: 10px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
          }

          .close-button {
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            background: transparent;
            border: none;
            z-index: 1001;
            transition: color 0.2s;
          }

          .close-button:hover {
            color: #ff4c4c;
          }
        `}
      </style>

      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Selected" />
          <span className="close-button" onClick={closeLightbox}>
            &times;
          </span>
        </div>
      )}
    </>
  );
}
