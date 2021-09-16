import { connect } from 'react-redux';
import ProductCard from '../ProductCard';

const Cart = ({ cart }) => {
    return (
        <div>
            {cart.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Cart);
