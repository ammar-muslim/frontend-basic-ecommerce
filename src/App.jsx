import './App.css'
import Header from './components/Header.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Categories from './components/Categories.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'
import StoreContext from './hooks/StoreContext'


function App() {

  const [filter, setFilter] = useState("/products?populate=*")

  const [selectedCategories, setSelectedCategories] = useState([])



  return (
    <>
    <Header />
    <Cart />
    <StoreContext.Provider value={
      {
        filter , setFilter,
        selectedCategories, setSelectedCategories
        }}>
    <Categories />
    <Products />
    </StoreContext.Provider>
    <Footer />
    </>
  )
}

export default App
