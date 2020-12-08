from flask_restful import Resource, reqparse
from models.fornecedorModel import FornecedorModel
from sql_alchemy import banco


class Fornecedores(Resource):
    def get(self):
        return {'fornecedores': [fornecedor.json() for fornecedor in FornecedorModel.query.all()]}


class Fornecedor(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('nome_fornecedor')
    atributos.add_argument('telefone_fornecedor')
    atributos.add_argument('cpf_cnpjFornecedor')
    atributos.add_argument('tipo_fornecedor')

    def get(self, id_fornecedor):
        fornecedor = FornecedorModel.find_fornecedor(id_fornecedor)
        if fornecedor:
            fornecedor_json = fornecedor.json()
            return fornecedor_json
        return {'message': 'Nenhum fornecedor encontrado'}, 404

    def post(self, id_fornecedor):
        dados = Fornecedor.atributos.parse_args()
        print('dados')
        fornecedor = FornecedorModel(**dados)
        fornecedor.save_fornecedor()
        return fornecedor.json()

    def put(self, id_fornecedor):
        print(id_fornecedor)
        dados = Fornecedor.atributos.parse_args()
        fornecedor_encontrado = FornecedorModel.find_fornecedor(id_fornecedor)
        if fornecedor_encontrado:
            fornecedor_encontrado.update_fornecedor(**dados)
            fornecedor_encontrado.save_fornecedor()
            return fornecedor_encontrado.json(), 200
        fornecedor_encontrado = FornecedorModel(**dados)
        fornecedor_encontrado.save_fornecedor()
        return 201

    def delete(self, id_fornecedor):
        fornecedor = FornecedorModel.find_fornecedor(id_fornecedor)
        if fornecedor:
            fornecedor.delete_fornecedor()
            return fornecedor.json(), 200
        return {'message': 'Fornecedor não localizado'}, 500
