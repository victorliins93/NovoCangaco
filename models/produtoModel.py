from sql_alchemy import banco
from models.fornecedor_produtoModel import fornecedor_produto
from models.fornecedorModel import FornecedorModel


class ProdutoModel(banco.Model):
    # CRIAÇÃO DA TABELA DO BANCO
    __tablename = 'produto_model'
    id_produto = banco.Column(
        banco.Integer, primary_key=True, autoincrement=True)
    nome_produto = banco.Column(banco.String)
    valor_produto = banco.Column(banco.Float(precision=2))
    qnt_estoque = banco.Column(banco.Integer)
    fornecedores = banco.relationship(
        'FornecedorModel', secondary=fornecedor_produto, back_populates='produtos')
    # CONSTRUTOR

    def __init__(self, nome_produto, valor_produto, qnt_estoque):
        self.nome_produto = nome_produto
        self.valor_produto = valor_produto
        self.qnt_estoque = qnt_estoque

    def json(self):
        return {
            'id_produto': self.id_produto,
            'nome_produto': self.nome_produto,
            'valor_produto': self.valor_produto,
            'qnt_estoque': self.qnt_estoque,
            'fornecedores': [fornecedor.json() for fornecedor in self.fornecedores]
        }

    @classmethod
    def find_produto(cls, id_produto):
        produto = cls.query.filter_by(id_produto=id_produto).first()
        if produto:
            return produto
        return None

    def save_produto(self, lista_fornecedores):
        for id_fornecedor in lista_fornecedores:
            fornecedor = FornecedorModel.query.filter_by(
                id_fornecedor=id_fornecedor).first()
            self.fornecido.append(fornecedor)

        banco.session.add(self)
        banco.session.commit()

    def update_produto(self, nome_produto, valor_produto, qnt_estoque):
        self.nome_produto = nome_produto
        self.valor_produto = valor_produto
        self.qnt_estoque = qnt_estoque

    def delete_produto(self):
        banco.session.delete(self)
        banco.session.commit()
