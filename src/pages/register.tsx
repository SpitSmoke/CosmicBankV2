import { useState } from 'react'
import { FormContainer } from '../styles/register'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setError('')
    console.log('Dados cadastrados:', formData)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Cadastre-se</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Cadastrar</button>
    </FormContainer>
  )
}

export default Register
