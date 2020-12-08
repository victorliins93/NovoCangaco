from sql_alchemy import banco
from models.fornecedor_produtoModel import fornecedor_produto


class FornecedorModel(banco.Model):
    # CRIAÇÃO DA TABELA DO BANCO
    __tablename = 'fornecedor_model'
    id_fornecedor = banco.Column(
        banco.Integer, primary_key=True, autoincrement=True)
    nome_fornecedor = banco.Column(banco.String)
    telefone_fornecedor = banco.Column(banco.String)
    cpf_cnpjFornecedor = banco.Column(banco.String)
    tipo_fornecedor = banco.Column(banco.String)
    produtos = banco.relationship(
        'ProdutoModel', secondary=fornecedor_produto, back_populates='fornecedores')

    # CONSTRUTOR

    def _init_(self, nome_fornecedor, telefone_fornecedor, cpf_cnpjFornecedor, tipo_fornecedor):
        self.nome_fornecedor = nome_fornecedor
        self.telefone_fornecedor = telefone_fornecedor
        self.cpf_cnpjFornecedor = cpf_cnpjFornecedor
        self.tipo_fornecedor = tipo_fornecedor

    def json(self):
        return {
            'nome_fornecedor': self.nome_fornecedor,
            'telefone_fornecedor': self.telefone_fornecedor,
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

    def update_fornecedor(self, nome_fornecedor, telefone_fornecedor, cpf_cnpjFornecedor, tipo_fornecedor):
        self.nome_fornecedor = nome_fornecedor
        self.telefone_fornecedor = telefone_fornecedor
        self.cpf_cnpjFornecedor = cpf_cnpjFornecedor
        self.tipo_fornecedor = tipo_fornecedor

    def delete_fornecedor(self):
        banco.session.delete(self)
        banco.session.commit()
