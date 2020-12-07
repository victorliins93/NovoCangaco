import React from 'react'
import { Icon, Table, Container } from 'semantic-ui-react'

const ListaFornecedor = () => (
    <div>
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Codigo Fornecedor</Table.HeaderCell>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Telefone</Table.HeaderCell>
                        <Table.HeaderCell>CPF/CNPJ</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>01</Table.Cell>
                        <Table.Cell>Jorge</Table.Cell>
                        <Table.Cell>81 99999 9999</Table.Cell>
                        <Table.Cell>XXX.XXX-XX</Table.Cell>
                        <Table.Cell>Pessoa Fisica</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>02</Table.Cell>
                        <Table.Cell>Extra</Table.Cell>
                        <Table.Cell>81 98888 8888</Table.Cell>
                        <Table.Cell>XX.XXX.XXX/XXXX-XX</Table.Cell>
                        <Table.Cell>Pessoa Juridica</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>


            </Table>

        </Container>
    </div>
)

export default ListaFornecedor
