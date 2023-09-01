import { useState } from 'react';

function AddCategory({ onAddCategory }) {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const category = inputValue.trim();

    if (category.length <= 1) return;

    setinputValue('');
    onAddCategory(category);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Cats, Anime, Technology'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
