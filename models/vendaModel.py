from sql_alchemy import banco
from models.produtoModel import ProdutoModel
from models.venda_produtoModel import venda_produto


class VendaModel(banco.Model):
    # CRIAÇÃO DA TABELA DO BANCO
    __tablename = 'venda_model'
    id_venda = banco.Column(
        banco.Integer, primary_key=True, autoincrement=True)
    qtd_produtos = banco.Column(banco.Integer)
    valor_total = banco.Column(banco.Float)
    id_usuario = banco.Column(
        banco.Integer, banco.ForeignKey('usuario_model.id_usuario'))
    produtos = banco.relationship('ProdutoModel', secondary=venda_produto, lazy='subquery',
                                  backref=banco.backref('venda_produto', lazy=True))

    # CONSTRUTOR
    def __init__(self, qtd_produtos, valor_total, id_usuario):
        self.qtd_produtos = qtd_produtos
        self.valor_total = valor_total
        self.id_usuario = id_usuario

    def json(self):
        return {
            'qtd_produtos': self.qtd_produtos,
            'valor_total': self.valor_total,
            'id_usuario': self.id_usuario,
            'produtos': [produto.json() for produto in self.produtos]
        }

    @classmethod
    def find_venda(cls, id_venda):
        venda = cls.query.filter_by(id_venda=id_venda).first()
        if venda:
            return venda
        return None

    def save_venda(self, lista_produtos):
        for id_produto in lista_produtos:
            produto = ProdutoModel.query.filter_by(
                id_produto=id_produto).first()
            self.produtos.append(produto)
        banco.session.add(self)
        banco.session.commit()

    def update_venda(self, qtd_produtos, valor_total, id_usuario):
        self.nome_venda = nomeVenda
        self.telefone = telefone
        self.cpf_cnpjVenda = cpf_cnpjVenda
        self.tipo_venda = tipoVenda

    def delete_venda(self):
        banco.session.delete(self)
        banco.session.commit()
