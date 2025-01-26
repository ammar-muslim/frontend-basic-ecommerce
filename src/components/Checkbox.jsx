import React, { useEffect, useContext } from 'react';
import './checkbox.css';
import StoreContext from '../hooks/StoreContext';
import qs from 'qs';

const Checkbox = ({ category }) => {
  const { setFilter, selectedCategories, setSelectedCategories } = useContext(StoreContext);

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        categories: {
          id: {
            $in: selectedCategories,
          },
        },
      },
    });

    setFilter(`${import.meta.env.VITE_API_URL}/products?populate=*&${query}`);
  }, [selectedCategories]);

  const handleFilterCategory = (e) => {
    const selectedId = e.target.dataset.category;
    const isChecked = e.target.checked;

    setSelectedCategories((prevSelectedCategories) => {
      if (isChecked) {
        return [...prevSelectedCategories, selectedId];
      } else {
        return prevSelectedCategories.filter((id) => id !== selectedId);
      }
    });
  };

  return (
    <div className="checkbox">
      <div className="badge">
        {/* <img src={`${import.meta.env.VITE_APP_URL + category.image.url}`} alt={category.title} /> */}
        {/* <p className="desc">{category.desc}</p> */}
      </div>

      <div className="line">
        <label className="toggler-wrapper label style-16">
          <input
            className="input"
            type="checkbox"
            data-category={category.id}
            onChange={handleFilterCategory}
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
        <h3 className="title">{category.title}</h3>
      </div>
    </div>
  );
};

export default Checkbox;
