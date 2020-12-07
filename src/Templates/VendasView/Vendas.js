import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import CadastroVendas from './CadastroVendas'
import ListaVendas from './ListaVendas'


const Vendas = props => {
    return (
        <BrowserRouter>
            <div align="center">
                <Container>

                    <h2>Menu Vendas</h2>

                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/cadastrovendas'>Nova Venda
                                <Header.Subheader>
                                        <Icon name='add user' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/listavendas'>Listar Vendas
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

                <Route path='/cadastrovendas' component={CadastroVendas} />
                <Route path='/listavendas' component={ListaVendas} />
            </div>
        </BrowserRouter>
    )
}

export default Vendas