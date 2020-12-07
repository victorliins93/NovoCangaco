import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

const AtualizarUsuario = () => (
    <div>
        <h1>Atualizar Usuários</h1>
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
                <Button type='submit'>Atualizar</Button>
            </Form>
        </Container>
    </div>
)

export default AtualizarUsuario
