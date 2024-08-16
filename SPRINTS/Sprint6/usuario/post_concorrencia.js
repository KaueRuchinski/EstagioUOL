/*
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '5s',
};

export default function () {
    const res = http.get('http://localhost:3000/usuarios');



    check(res, { 'status é 200': (r) => r.status === 200 });

    sleep(1);
}
*/
import http from 'k6/http';
import { check, fail } from 'k6';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 500,
    duration: '25s',
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<500'], 
    },
};

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

function createUser() {
    return {
        nome: "Fulano da Silva",
        email: `user${Math.floor(Math.random() * 1000)}@qa.com.br`,
        password: "teste",
        administrador: "true",
    };
}

export function setup() {
    let user = createUser();
    const req = http.post('http://localhost:3000/usuarios', JSON.stringify(user), {
        headers: { 'Content-Type': 'application/json' }
    });

    if (req.status !== 201) {
        fail('Erro ao criar usuário');
    }

    return { user };
}

export default function(data) {
    const loginPayload = JSON.stringify({
        email: data.user.email,
        password: data.user.password,
    });

    const req = http.post('http://localhost:3000/login', loginPayload, {
        headers: { 'Content-Type': 'application/json' }
    });

    check(req, {
        'login successful': (r) => r.status === 200,
    });

    console.log(req.body);
    sleep(1);
}