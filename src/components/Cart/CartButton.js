import classes from './CartButton.module.css';
import {useSelector,useDispatch} from 'react-redux';

import {cartActions} from '../../store/index';

const CartButton = (props) => {
  const dispatch=useDispatch();
  
  const handleToggleCart=()=>{
    dispatch(cartActions.toggle());
  }
  const cartCount=useSelector((state)=>state.cartReducer.totalAmount)
  
  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span >My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
