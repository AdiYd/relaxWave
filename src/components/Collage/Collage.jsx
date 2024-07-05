import React, { useEffect, useState } from 'react';
import './Collage.css';

const generateImageUrls = (count) => {
  const urls = [];
  for (let i = 0; i < count; i++) {
    const width = Math.floor(Math.random() * 200) + 100; // Random width between 300 and 500
    const height = Math.floor(Math.random() * 200) + 100; // Random height between 300 and 500
    urls.push(`https://picsum.photos/${width}/${height}`);
  }
  return urls;
};

const Collage = ({imageList=[], count=4}) => {
  const [images, setImages] = useState(imageList);

  useEffect(() => {
    if (!imageList.length){
      const imageUrls = generateImageUrls(count);
      setImages(imageUrls);
    }
  }, []);

  return (
    <div className="collage-container">
      {images.map((src, index) => (
        <div key={index} className={`collage-item w-fit h-fit mx-auto shadow-md hover:shadow-lg collage-item-${index % 5}`}>
          <img src={src} alt={`Collage ${index}`} className="collage-img" />
        </div>
      ))}
    </div>
  );
};

export default Collage;
