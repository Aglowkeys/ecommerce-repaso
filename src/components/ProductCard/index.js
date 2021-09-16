import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { addToCart, removeFromCart } from '../../redux/actions';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/cart') {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={handleClick}>
                {location.pathname === '/cart' ? 'Quitar del carrito' : 'Agregar al carrito'}
            </button>
        </div>
    );
};

export default connect(null, { addToCart, removeFromCart })(ProductCard);
