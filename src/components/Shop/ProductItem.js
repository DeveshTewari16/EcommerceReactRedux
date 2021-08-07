import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/index';

const ProductItem = (props) => {
  
  const { title, quantity=1,price, description } = props;
  
  const item={title:title,quantity:quantity,price:price,
  description:description}
  const dispatch=useDispatch();
  const handleAddtoCart=()=>{
    dispatch(cartActions.addToCart(item))
  }

  return (
    
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
