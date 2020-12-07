import './App.css';
import { Route, HashRouter } from 'react-router-dom'

import Login from './Templates/Login'
import Usuario from './Templates/UsuarioView/Usuario'
import Produto from './Templates/ProdutoView/Produto'
import Fornecedor from './Templates/FornecedorView/Fornecedor'
import Home from './Templates/Home'
import Vendas from './Templates/VendasView/Vendas'





function App() {
  return (
    <HashRouter>
      <div className="App">




        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/usuario' component={Usuario} />
        <Route path='/produto' component={Produto} />
        <Route path='/fornecedor' component={Fornecedor} />
        <Route path='/vendas' component={Vendas} />




      </div>
    </HashRouter>
  );
}

export default App;
