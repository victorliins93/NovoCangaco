import React from 'react'
import { Icon, Table, Container } from 'semantic-ui-react'

const ListaUsuario = () => (
    <div>
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Administrador</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>01</Table.Cell>
                        <Table.Cell>eduardoviana11@hotmail.com</Table.Cell>
                        <Table.Cell>True</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>02</Table.Cell>
                        <Table.Cell>joaomarcelo@hotmail.com</Table.Cell>
                        <Table.Cell>False</Table.Cell>
                        <Table.Cell><a href=""><Icon name='user delete'/></a></Table.Cell>
                        <Table.Cell><a href="">Atualizar</a></Table.Cell>
                    </Table.Row>
                </Table.Body>


            </Table>

        </Container>
    </div>
)

export default ListaUsuario
