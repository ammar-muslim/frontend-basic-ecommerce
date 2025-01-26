import { Fragment, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import './categories.css';
import Checkbox from './Checkbox';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch("/categories?populate=*");

  useEffect(() => {
    data && setCategories(data);
  }, [data]);

  return (
    <div className="categories-container">
      {loading ? (
        <h1 className="loading-text">Loading...</h1>
      ) : (
        categories.map((category) => (
            <Fragment key={category.id}>
            <Checkbox category={category}/>
            </Fragment>
        ))
      )}
    </div>
  );
};

export default Categories;
