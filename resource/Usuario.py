from flask_restful import Resource, reqparse
from models.usuarioModel import UsuarioModel
from sql_alchemy import banco


class Usuarios(Resource):
    def get(self):
        usuarios = UsuarioModel.query.all()
        lista_usuario = []
        for usuario in usuarios:
            lista_usuario.append(usuario.json())
        return lista_usuario


class Usuario(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('email')
    atributos.add_argument('senha')
    atributos.add_argument('adm')

    def get(self, id_usuario):
        usuario = UsuarioModel.find_usuario(id_usuario)
        if usuario:
            usuario_json = usuario.json()
            return usuario_json
        return {'message': 'Nenhum usuario encontrado'}, 404

    def post(self, id_usuario):
        dados = Usuario.atributos.parse_args()
        usuario = UsuarioModel(**dados)
        usuario.save_usuario()
        return usuario.json()

    def put(self, id_usuario):
        print(id_usuario)
        dados = Usuario.atributos.parse_args()
        usuario_encontrado = UsuarioModel.find_usuario(id_usuario)
        if usuario_encontrado:
            usuario_encontrado.update_usuario(**dados)
            usuario_encontrado.save_usuario()
            return usuario_encontrado.json(), 200
        usuario_encontrado = UsuarioModel(**dados)
        usuario_encontrado.save_usuario()
        return 201

    def delete(self, id_usuario):
        usuario = UsuarioModel.find_usuario(id_usuario)
        if usuario:
            usuario.delete_usuario()
            return usuario.json(), 200
        return {'message': 'Usuario não localizado'}, 500
