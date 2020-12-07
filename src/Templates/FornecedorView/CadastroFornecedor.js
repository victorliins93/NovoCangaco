import React, { Component } from 'react'
import { Button, Form, Container, Radio } from 'semantic-ui-react'

export default class CadastroFornecedor extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      return (
        <div lign="center">
        <h1>Adicionar novos Fornecedores</h1>
        <Container>
            <Form>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Descrição' />
                </Form.Field>
                <Form.Field>
                    <label>Telefone</label>
                    <input type='text' />
                </Form.Field>
                <Form.Field>
                    <label>CPF/CNPJ</label>
                    <input type='text' />
                </Form.Field>

                <Form.Field>
                    Tipo: <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Pessoa Fisica'
                        name='radioGroup'
                        value='PF'
                        checked={this.state.value === 'PF'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Pessoa Juridica'
                        name='radioGroup'
                        value='PJ'
                        checked={this.state.value === 'PJ'}
                        onChange={this.handleChange}
                    />
                </Form.Field>

                <Button type='submit'>Adicionar Fornecedor</Button>
            </Form>
        </Container>
    </div>

      )
    }
  }
