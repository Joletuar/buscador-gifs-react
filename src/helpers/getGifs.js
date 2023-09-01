// Petición http a la API de GIF para obtener las imágenes
// Colocamos la función fuera de nuestr o componente para que no se renderice

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZiEBO0GsXJQtOzGEWZQF9iDdB5B2OnXQ&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json(); // Retorna 20 objetos

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs; // Este elemento es una promesa
};
