import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length + localImages.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, localImages.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length + localImages.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length + localImages.length - 1 : prevIndex - 1
    );
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        if (newImages.length === files.length) {
          setLocalImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-auto">
        {[...images, ...localImages].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`flex-none w-full h-full transition-transform duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="absolute bottom-4 left-4"
      />
    </div>
  );
};

export default ImageGallery;
