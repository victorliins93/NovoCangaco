import React from 'react'
import { Icon, Table, Container } from 'semantic-ui-react'

const ListaProduto = () => (
    <div>
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Codigo Produto</Table.HeaderCell>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Valor</Table.HeaderCell>
                        <Table.HeaderCell>Quantidade de Estoque</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>01</Table.Cell>
                        <Table.Cell>Água</Table.Cell>
                        <Table.Cell>1,99</Table.Cell>
                        <Table.Cell>25</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>


            </Table>

        </Container>
    </div>
)

export default ListaProduto
