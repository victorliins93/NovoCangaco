from sql_alchemy import banco
from models.fornecedorModel import FornecedorModel

venda_produto = banco.Table('venda_produto',
                            banco.Column('id_venda', banco.Integer, banco.ForeignKey(
                                'venda_model.id_venda'), primary_key=True),
                            banco.Column('id_produto', banco.Integer, banco.ForeignKey(
                                'produto_model.id_produto'), primary_key=True),
                            banco.Column('qnt_produto', banco.Integer),
                            banco.Column('valor_produto', banco.Integer)
                            )
