import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions';
import ProductCard from '../ProductCard';

const Catalog = ({ products, getProducts }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    const handleChange = (ev) => {
        setInput(ev.target.value.toLowerCase());
    };

    return (
        <>
            <form>
                <input type='text' value={input} onChange={handleChange} />
            </form>
            <div>
                {products.length > 0
                    ? products
                          .filter((product) => product.title.toLowerCase().includes(input))
                          .map((product) => <ProductCard key={product.id} product={product} />)
                    : 'Cargando...'}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps, { getProducts })(Catalog);
