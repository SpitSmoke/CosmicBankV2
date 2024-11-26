/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import axios from 'axios'
import {
  FormContainer,
  InputField,
  LoginButton,
  LoginWrapper,
} from '../styles/login'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Chamada para o servidor
      const response = await axios.post('http://localhost:5000/login', formData)

      // Salvando o token no Local Storage
      localStorage.setItem('authToken', response.data.token)

      // Redirecionando para a página inicial
      navigate('/')
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <LoginButton type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </LoginButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Link to="/register">
          <p>
            Não tem uma conta? <a>Cadastre-se</a>
          </p>
        </Link>
      </FormContainer>
    </LoginWrapper>
  )
}

export default Login
