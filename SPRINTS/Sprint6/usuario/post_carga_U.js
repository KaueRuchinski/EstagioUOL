import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 500,
    duration: '25s',
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<2000'], 
    },
};

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function () {
    const BASE_URL = 'http://localhost:3000';

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
