import { Route, Routes, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Routes>
            <Route path="/checkout" element={Checkout} />
            <Route path="/" exact element={BurgerBuilder} />
          </Routes>
        </Switch>  
      </Layout>
    </div>
  );
}

export default App;
