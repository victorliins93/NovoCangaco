from flask_restful import Resource, reqparse
from models.vendaModel import VendaModel
from sql_alchemy import banco


class Vendas(Resource):
    def get(self):
        vendas = VendaModel.query.all()
        lista_venda = []
        for venda in vendas:
            lista_venda.append(venda.json())
        return lista_venda


class Venda(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('valor_total')

    def get(self, id_venda):
        venda = VendaModel.find_venda(id_venda)
        if venda:
            venda_json = venda.json()
            return venda_json
        return {'message': 'Nenhum venda encontrado'}, 404

    def post(self, id_venda):
        dados = Venda.atributos.parse_args()
        venda = VendaModel(**dados)
        venda.save_venda()
        return venda.json()

    def put(self, id_venda):
        print(id_venda)
        dados = Venda.atributos.parse_args()
        venda_encontrado = VendaModel.find_venda(id_venda)
        if venda_encontrado:
            venda_encontrado.update_venda(**dados)
            venda_encontrado.save_venda()
            return venda_encontrado.json(), 200
        venda_encontrado = VendaModel(**dados)
        venda_encontrado.save_venda()
        return 201

    def delete(self, id_venda):
        venda = VendaModel.find_venda(id_venda)
        if venda:
            venda.delete_venda()
            return venda.json(), 200
        return {'message': 'Venda não localizado'}, 500
