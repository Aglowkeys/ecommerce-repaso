import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions';
import ProductCard from '../ProductCard';

/* class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                {products.length > 0
                    ? products.map((product) => <ProductCard key={product.id} product={product} />)
                    : 'Cargando...'}
            </div>
        );
    }
} */

// const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//     };
// };

// export default connect(mapStateToProps, { getProducts })(Catalog);

const Catalog = ({ products, getProducts }) => {
    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        getProducts();
    }, []);

    const handleChange = (ev) => {
        setInput(ev.target.value.toLowerCase());
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
