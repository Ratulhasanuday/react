import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    console.log(bottle);
    
    const { name, img, price } = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Bottle: {name}</h3>
            <h3>Price: ${price}</h3>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;