from flask_restful import Resource, reqparse
from models.produtoModel import ProdutoModel
from sql_alchemy import banco


class Produtos(Resource):
    def get(self):
        return {'produtos': [produto.json() for produto in ProdutoModel.query.all()]}


class Produto(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('nome_produto')
    atributos.add_argument('valor_produto')
    atributos.add_argument('qnt_estoque')
    atributos.add_argument('lista_fornecedores', action='append')

    def get(self, id_produto):
        produto = ProdutoModel.find_produto(id_produto)
        if produto:
            produto_json = produto.json()
            return produto_json
        return {'message': 'Nenhum produto encontrado'}, 404

    def post(self, id_produto):
        dados = Produto.atributos.parse_args()
        produto = ProdutoModel(
            nome_produto=dados['nome_produto'], valor_produto=dados['valor_produto'], qnt_estoque=dados['qnt_estoque'])
        produto.save_produto(dados['lista_fornecedores'])
        return produto.json()

    def put(self, id_produto):
        dados = Produto.atributos.parse_args()
        produto_encontrado = ProdutoModel.find_produto(id_produto)
        if produto_encontrado:
            produto_encontrado.update_produto(
                nome_produto=dados['nome_produto'], valor_produto=dados['valor_produto'], qnt_estoque=dados['qnt_estoque'])
            produto_encontrado.save_produto()
            return produto_encontrado.json(), 200
        produto_encontrado = ProdutoModel(**dados)
        produto_encontrado.save_produto()
        return 201

    def delete(self, id_produto):
        produto = ProdutoModel.find_produto(id_produto)
        if produto:
            produto.delete_produto()
            return produto.json(), 200
        return {'message': 'Produto não localizado'}, 500
