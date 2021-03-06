import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const Cart = (props) => {
  const isToggleState=useSelector((state)=>state.cartReducer.isToggle)
  return (
    <>{isToggleState &&
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>

        <CartItem
          item={{ title: 'Item 1', quantity: 2, total: 18, price: 6 }}
        />
      </ul>
    </Card>
    }
    </>
  );
};

export default Cart;
