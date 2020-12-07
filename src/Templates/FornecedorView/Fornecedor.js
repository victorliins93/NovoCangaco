import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import CadastroFornecedor from './CadastroFornecedor'
import ListaFornecedor from './ListaFornecedor'


const Fornecedor = props => {
    return (
        <BrowserRouter>
            <div align="center">
                <Container>

                    <h2>Menu de Fornecedores</h2>

                    <Grid columns={2}>
                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/cadastrofornecedor'>Adicionar Fornecedor
                                <Header.Subheader>
                                        <Icon name='add user' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/listafornecedor'>Listar Fornecedor
                                <Header.Subheader>
                                        <Icon name='list layout' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/home'>Home
                                <Header.Subheader>
                                        <Icon name='home' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Route path='/cadastrofornecedor' component={CadastroFornecedor} />
                <Route path='/listafornecedor' component={ListaFornecedor} />
            </div>
        </BrowserRouter>
    )
}

export default Fornecedor