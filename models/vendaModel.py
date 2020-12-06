from sql_alchemy import banco
from models.produtoModel import ProdutoModel
from models.venda_produtoModel import venda_produto


class VendaModel(banco.Model):
    # CRIAÇÃO DA TABELA DO BANCO
    __tablename = 'venda_model'
    id_venda = banco.Column(
        banco.Integer, primary_key=True, autoincrement=True)
    qtd_produto = banco.Column(banco.Integer)
    valor_total = banco.Column(banco.Float)
    id_usuario = banco.Column(
        banco.Integer, banco.ForeignKey('usuario_model.id_usuario'))
    venda_produto = banco.relationship('ProdutoModel', secondary=venda_produto, lazy='subquery',
                                       backref=banco.backref('venda_produto', lazy=True))

    # CONSTRUTOR
    def __init__(self, qtd_produto, valor_total, id_usuario):
        self.qtd_produto = qtd_produto
        self.valor_total = valor_total
        self.id_usuario = id_usuario

    def json(self):
        return {
            'nome_fornecedor': self.nome_fornecedor,
            'telefone': self.telefone,
            'cpf_cnpjFornecedor': self.cpf_cnpjFornecedor,
            'tipo_fornecedor': self.tipo_fornecedor
        }

    @classmethod
    def find_fornecedor(cls, id_fornecedor):
        fornecedor = cls.query.filter_by(id_fornecedor=id_fornecedor).first()
        if fornecedor:
            return fornecedor
        return None

    def save_fornecedor(self):
        banco.session.add(self)
        banco.session.commit()

    def update_fornecedor(self, nome, telefone, cpf, email):
        self.nome_fornecedor = nomeFornecedor
        self.telefone = telefone
        self.cpf_cnpjFornecedor = cpf_cnpjFornecedor
        self.tipo_fornecedor = tipoFornecedor

    def delete_fornecedor(self):
        banco.session.delete(self)
        banco.session.commit()
