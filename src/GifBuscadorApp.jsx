import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifBuscadorApp() {
  const [categories, setcategories] = useState(['Cats']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert('La categoría ya existe');
      return;
    }

    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de Gif de Gatos</h1>

      <AddCategory onAddCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifBuscadorApp;
