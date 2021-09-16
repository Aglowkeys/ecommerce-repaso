import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Route exact path='/' component={Catalog} />
            <Route path='/cart' component={Cart} />
        </>
    );
};

export default App;
