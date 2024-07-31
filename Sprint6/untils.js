
export let createUser = () => ({
  nome: "Fulano da Silva",
  email: `user$(Math.floor(Math.random()*1000)}@qa.com.br`,
  password: "teste",
  administrador: "true",
})

export let createProduct = () => ({
  nome: `user$(Math.floor(Math.random()*1000)}`,
  preco: 100,
  descricao: "teste",
  quantidade: 100,
})