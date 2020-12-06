from flask_restful import Resource, reqparse
from models.produtoModel import ProdutoModel
from sql_alchemy import banco


class Produtos(Resource):
    def get(self):
        produtos = ProdutoModel.query.all()
        lista_produto = []
        for produto in produtos:
            lista_produto.append(produto.json())
        return lista_produto


class Produto(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('nome_produto')
    atributos.add_argument('valor_produto')
    atributos.add_argument('qnt_estoque')

    def get(self, id_produto):
        produto = ProdutoModel.find_produto(id_produto)
        if produto:
            produto_json = produto.json()
            return produto_json
        return {'message': 'Nenhum produto encontrado'}, 404

    def post(self, id_produto):
        dados = Produto.atributos.parse_args()
        produto = ProdutoModel(**dados)
        produto.save_produto()
        return produto.json()

    def put(self, id_produto):
        dados = Produto.atributos.parse_args()
        produto_encontrado = ProdutoModel.find_produto(id_produto)
        if produto_encontrado:
            produto_encontrado.update_produto(**dados)
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
