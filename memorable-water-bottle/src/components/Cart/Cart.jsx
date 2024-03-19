import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div className="cart-container">
            <h2>Cart: {cart.length}</h2>
            <div>
                {
                cart.map(bottle=><img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;