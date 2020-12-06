from sql_alchemy import banco

fornecedor_produto = banco.Table('fornecedor_produto',
                                 banco.Column('id_produto', banco.Integer, banco.ForeignKey(
                                     'produto_model.id_produto'), primary_key=True),
                                 banco.Column('id_fornecedor', banco.Integer, banco.ForeignKey(
                                     'fornecedor_model.id_fornecedor'), primary_key=True)
                                 )
