from flask import Flask
from flask_restful import Api
from resource.Usuario import Usuario, Usuarios
from resource.Fornecedor import Fornecedor, Fornecedores
from resource.Venda import Venda, Vendas
from resource.Produto import Produto, Produtos


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)

api.add_resource(Usuarios, '/usuarios')
api.add_resource(Usuario, '/usuario/<string:id_usuario>')
api.add_resource(Vendas, '/vendas')
api.add_resource(Venda, '/venda/<string:id_venda>')
api.add_resource(Fornecedores, '/fornecedores')
api.add_resource(Fornecedor, '/fornecedor/<string:id_fornecedor>')
api.add_resource(Produtos, '/produtos')
api.add_resource(Produto, '/produto/<string:id_produto>')


@app.before_first_request
def cria_banco():
    banco.create_all()


if __name__ == '__main__':
    from sql_alchemy import banco
    banco.init_app(app)
    app.run(debug=True)
