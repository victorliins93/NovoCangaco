import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const AtualizarProduto = () => (
    <div>
        <h1>Atualizar Produtos</h1>
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
                <Button type='submit'>Atualizar</Button>
            </Form>
        </Container>
    </div>
)

export default AtualizarProduto
