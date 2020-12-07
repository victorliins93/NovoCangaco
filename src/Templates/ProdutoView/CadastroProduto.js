import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const CadastroProduto = () => (
    <div lign="center">
        <h1>Cadastrar novos Produtos</h1>
        <Container>
            <Form>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Descrição' />
                </Form.Field>
                <Form.Field>
                    <label>Valor</label>
                    <input type='numer' />
                </Form.Field>
                <Form.Field>
                    <label>Quantidade no Estoque</label>
                    <input type='numer' />
                </Form.Field>
                <Button type='submit'>Lançar Produto</Button>
            </Form>
        </Container>
    </div>
)

export default CadastroProduto
