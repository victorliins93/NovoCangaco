import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const AtualizarVendas = () => (
    <div lign="center">
        <h1>Atualizar Venda</h1>
        <Container>
            <Form>
                <Form.Field>
                    <label>Produto</label>
                    <input placeholder='Descrição' />
                </Form.Field>
                <Form.Field>
                    <label>Vendedor</label>
                    <input placeholder='Descrição' />
                </Form.Field>
                <Form.Field>
                    <label>Valor Total</label>
                    <input type='numer' />
                </Form.Field>
                <Form.Field>
                    <label>Quantidade de Produtos</label>
                    <input type='numer' />
                </Form.Field>
                <Button type='submit'>Atualizar Venda</Button>
            </Form>
        </Container>
    </div>
)

export default AtualizarVendas
