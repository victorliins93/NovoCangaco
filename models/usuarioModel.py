from sql_alchemy import banco
from models.vendaModel import VendaModel


class UsuarioModel(banco.Model):
    # CRIAÇÃO DA TABELA DO BANCO
    __tablename = 'usuario_model'
    id_usuario = banco.Column(
        banco.Integer, primary_key=True, autoincrement=True)
    email = banco.Column(banco.String)
    senha = banco.Column(banco.String)
    adm = banco.Column(banco.Integer, default=False, server_default="false")
    venda_usuario = banco.relationship(
        'VendaModel', backref='addVenda', lazy='select')

    # CONSTRUTOR

    def __init__(self, email, senha, adm):
        self.email = email
        self.senha = senha
        self.adm = adm

    def json(self):
        return {
            'id_usuario': self.id_usuario,
            'email': self.email,
            'senha': self.senha,
            'adm': self.adm
        }

    @classmethod
    def find_usuario(cls, id_usuario):
        usuario = cls.query.filter_by(id_usuario=id_usuario).first()
        if usuario:
            return usuario
        return None

    def save_usuario(self):
        banco.session.add(self)
        banco.session.commit()

    def update_usuario(self, email, senha, adm):
        self.email = email
        self.senha = senha
        self.adm = adm

    def delete_usuario(self):
        banco.session.delete(self)
        banco.session.commit()
