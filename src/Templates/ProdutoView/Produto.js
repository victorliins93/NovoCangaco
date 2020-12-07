import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import CadastroProduto from './CadastroProduto'
import ListaProduto from './ListaProduto'


const Produto = props => {
    return (
        <BrowserRouter>
            <div align="center">
                <Container>

                    <h2>Menu de Produtos</h2>

                    <Grid columns={2}>
                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/cadastroproduto'>Adicionar Produto
                                <Header.Subheader>
                                        <Icon name='add user' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/listaproduto'>Listar Produto
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

                <Route path='/cadastroproduto' component={CadastroProduto} />
                <Route path='/listaproduto' component={ListaProduto} />
            </div>
        </BrowserRouter>
    )
}

export default Produto