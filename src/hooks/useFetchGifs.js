import { useEffect, useState } from 'react';

// Un hook es una función que regresa algo

import { getGifs } from '../helpers/getGifs';

function useFetchGifs(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // El useEffect no puede ser asíncrono
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
}

export default useFetchGifs;
