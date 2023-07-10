import React from 'react';
import Banner from './components/banner';
import Header from './components/header';
import Items from './components/items';
import Products from './components/products';
import ItemPreview from './components/itemPreview';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Products/>
      <Items/>
      <ItemPreview/>
      <Footer/>
    
    </div>
  );
}

export default App;
