import classes from './CartItem.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {cartActions} from '../../store/index';



const CartItem = (props) => {
  const { title, total, price } = props.item;
  
  const totalAmount=useSelector((state)=>state.cartReducer.totalAmount)
  let price_amount=totalAmount*price
  const dispatch=useDispatch();
  const handleAddByOne=()=>{
  dispatch(cartActions.increaseCartByOne());
  }

  const handleReduceByOne=()=>{
    dispatch(cartActions.decreaseCartByOne());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price_amount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleReduceByOne}>-</button>
          <button onClick={handleAddByOne}>+</button>
        </div>
      </div>
    </li>
    
  );
};

export default CartItem;
