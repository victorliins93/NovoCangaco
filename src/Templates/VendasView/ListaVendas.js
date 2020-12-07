import React from 'react'
import { Icon, Table, Container } from 'semantic-ui-react'

const ListaVendas = () => (
    <div>
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Codigo Venda</Table.HeaderCell>
                        <Table.HeaderCell>Vendedor</Table.HeaderCell>
                        <Table.HeaderCell>Produto</Table.HeaderCell>
                        <Table.HeaderCell>Valor Total</Table.HeaderCell>
                        <Table.HeaderCell>Quantidade de Produtos</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>01</Table.Cell>
                        <Table.Cell>João</Table.Cell>
                        <Table.Cell>Salame</Table.Cell>
                        <Table.Cell>19,99</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>02</Table.Cell>
                        <Table.Cell>Marcia</Table.Cell>
                        <Table.Cell>Água</Table.Cell>
                        <Table.Cell>3,98</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>


            </Table>

        </Container>
    </div>
)

export default ListaVendas
