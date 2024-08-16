
import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
      { duration: '5s', target: 50 },
      { duration: '4s', target: 700}, // Inicie com 0 VUs e aumente para 20 VUs em 10 segundos
    ],
  };

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function () {
    const BASE_URL = 'http://localhost:3000'; // Verifique se é o URL correto

    const user = {
        nome: "Fulano da Silva",
        email: `user_${Math.random().toString(36).substring(2)}@qa.com.br`,
        password: "teste",
        administrador: "true",
    };

   
    const headers = { 'Content-Type': 'application/json' };

    
    const res = http.post(`${BASE_URL}/usuarios`, JSON.stringify(user), { headers });


    console.log(`Status: ${res.status}`);
    console.log(`Response: ${res.body}`);

    
    check(res, { 'status é 201': (r) => r.status === 201 });

    sleep(1);
}