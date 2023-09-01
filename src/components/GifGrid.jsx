import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3> {category} </h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            // Forma de esparcir las propiedades
            {...img}
          />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
