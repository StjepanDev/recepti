import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Hero';
import MealCard from '../src/components/MealCard';

import React, { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);

  function getCategories() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      {categories.map((cat) => (
        <MealCard
          category={cat.strCategory}
          image={cat.strCategoryThumb}
          description={cat.strCategoryDescription}
        />
      ))}
    </div>
  );
}

export default App;
