import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import CadastroUsuario from './CadastroUsuario'
import ListaUsuario from './ListaUsuario'


const Usuario = props => {
    return (
        <BrowserRouter>
            <div align="center">
                <Container>

                    <h2>Menu Usuário</h2>

                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/cadastrousuario'>Cadastrar Usuário
                                <Header.Subheader>
                                        <Icon name='add user' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment circular>
                                <Header as={Link} to='/listausuario'>Listar Usuários
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

                <Route path='/cadastrousuario' component={CadastroUsuario} />
                <Route path='/listausuario' component={ListaUsuario} />
            </div>
        </BrowserRouter>
    )
}

export default Usuario