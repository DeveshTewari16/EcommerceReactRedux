import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function App() {
  
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
