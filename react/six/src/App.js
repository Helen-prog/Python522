import './App.css';
import ImageGallery from "react-image-gallery";
import data from './data.json';
import { useState } from 'react';

function App() {
  const collections = data.collections;
  const cats = data.categories;
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  return (
    <div className="App">

      <h1>Моя коллекция форографий</h1>

      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, index) => (
              <li
                key={index}
                onClick={() => setCategoryId(index)}
                className={categoryId === index ? 'active' : ''}
              >{obj.name}</li>
            ))
          }
        </ul>
      </div>

      <div className="search">
        <input type="text" className='search-input' placeholder='Поиск по названию'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)} />
      </div>

      <div className="image-gallery-wrapper">
        {
          collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          (categoryId === obj.category || categoryId === 0))
          .map((obj, index) => (
            <div className="collection" key={index}>
              <h2>{obj.name}</h2>
              <ImageGallery items={obj.photos} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
