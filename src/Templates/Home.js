import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'



const Home = props => {
    return (
        
            <div align="center">
                <Container>
                    <header className="App-header">
                        <h2>Home</h2>

                        <Grid columns={4}>
                            <Grid.Column>
                                <Segment circular>
                                    <Header as={Link} to='/usuario'>Usuários
                                <Header.Subheader>
                                            <Icon name='users' />
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment circular>
                                    <Header as={Link} to='/produto'>Produtos
                                <Header.Subheader>
                                            <Icon name='product hunt' />
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment circular>
                                    <Header as={Link} to='/fornecedor'>Fornecedores
                                <Header.Subheader>
                                            <Icon name='id badge' />
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment circular>
                                    <Header as={Link} to='/vendas'>Vendas
                                <Header.Subheader>
                                            <Icon name='id badge' />
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </header>
                </Container>
            </div>

        
    )
}

export default Home