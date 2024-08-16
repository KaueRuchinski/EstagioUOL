import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
  vus: 10, 
  duration: '2m', 
  thresholds: {
    http_req_duration: ['p(95)<2000'], 
    checks: ['rate>0.95'], 
  },
};

export default function () {
  const baseURL = 'http://localhost:3000';

  //  Criar Usuário Adm
  const adminUser = {
    nome: `Admin Teste ${Math.random()}`,
    email: `admin${Math.random().toString(36).substring(7)}@teste.com`,
    password: 'senha123',
    administrador: 'true', 
  };

  const createUserRes = http.post(`${baseURL}/usuarios`, JSON.stringify(adminUser), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(createUserRes, {
    'create user status is 201': (r) => r.status === 201,
    'create user message is correct': (r) => r.json().message === 'Cadastro realizado com sucesso',
  });

  if (createUserRes.status !== 201) {
    console.error('Falha na criação do usuário:', createUserRes.status, createUserRes.body);
    return;
  }

  const userId = createUserRes.json()._id;

  //  Login Usuário
  const loginPayload = JSON.stringify({
    email: adminUser.email,
    password: adminUser.password,
  });

  const loginRes = http.post(`${baseURL}/login`, loginPayload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(loginRes, {
    'login status is 200': (r) => r.status === 200,
    'login token is present': (r) => r.json().authorization !== undefined,
  });

  if (loginRes.status !== 200) {
    console.error('Falha no login:', loginRes.status, loginRes.body);
    return;
  }

  const token = loginRes.json().authorization;

  // Produto
  const productPayload = JSON.stringify({
    nome: `Produto Teste ${Math.random()}`,
    preco: 100,
    descricao: 'Descrição do Produto Teste',
    quantidade: 10,
  });

  const createProductRes = http.post(`${baseURL}/produtos`, productPayload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  });

  check(createProductRes, {
    'create product status is 201': (r) => r.status === 201,
    'create product message is correct': (r) => r.json().message === 'Cadastro realizado com sucesso',
  });

  if (createProductRes.status !== 201) {
    console.error('Falha na criação do produto:', createProductRes.status, createProductRes.body);
    return;
  }

  const productId = createProductRes.json()._id;

  // Editar Produto
  const updatedProductPayload = JSON.stringify({
    nome: `Produto Teste Atualizado ${Math.random()}`,
    preco: 120,
    descricao: 'Descrição Teste',
    quantidade: 15,
  });

  const updateProductRes = http.put(`${baseURL}/produtos/${productId}`, updatedProductPayload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  });

  check(updateProductRes, {
    'update product status is 200': (r) => r.status === 200,
    'update product message is correct': (r) => r.json().message === 'Registro alterado com sucesso',
  });

  if (updateProductRes.status !== 200) {
    console.error('Falha na atualização do produto:', updateProductRes.status, updateProductRes.body);
    return;
  }

  //  Excluir Produto
  const deleteProductRes = http.del(`${baseURL}/produtos/${productId}`, null, {
    headers: { 'Authorization': `${token}` },
  });

  check(deleteProductRes, {
    'delete product status is 200': (r) => r.status === 200,
    'delete product message is correct': (r) => r.json().message === 'Registro excluído com sucesso',
  });

  if (deleteProductRes.status !== 200) {
    console.error('Falha na exclusão do produto:', deleteProductRes.status, deleteProductRes.body);
    return;
  }

  // Excluir Usuário
  const deleteUserRes = http.del(`${baseURL}/usuarios/${userId}`, null, {
    headers: { 'Authorization': `${token}` },
  });

  check(deleteUserRes, {
    'delete user status is 200': (r) => r.status === 200,
    'delete user message is correct': (r) => r.json().message === 'Registro excluído com sucesso',
  });

  if (deleteUserRes.status !== 200) {
    console.error('Falha na exclusão do usuário:', deleteUserRes.status, deleteUserRes.body);
  }

  sleep(1); 
}

export function handleSummary(data) {
  return {
    'result-ct-022-flow.html': htmlReport(data),
  };
}
