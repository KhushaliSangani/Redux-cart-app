import { uiActions } from '../Store/ui-slice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  const toogleCartHandler =()=>{
    dispatch(uiActions.toogle());

  }
  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
