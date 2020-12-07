import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

const CadastroUsuario = () => (
    <div>
        <h1>Cadastrar Usuários</h1>
        <Container>
            <Form>
                <Form.Field>
                    <label>E-mail</label>
                    <input placeholder='E-mail' />
                </Form.Field>
                <Form.Field>
                    <label>Senha</label>
                    <input placeholder='Senha'
                        type='password' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Administrador' />
                </Form.Field>
                <Button type='submit'>Cadastrar</Button>
            </Form>
        </Container>
    </div>
)

export default CadastroUsuario
