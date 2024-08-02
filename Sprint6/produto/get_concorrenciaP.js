import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check,fail } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; 
import { createUser,createProduct } from '../k6 teste/utils';


export const options = {
    vus: 10,
    duration: '5s',
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<2000'] 
    },
};

const getUserTrend = new Trend('get_users_duration');
const errorRate = new Rate('errors');

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export function setup() {
    let data = createUser();
    const req = http.post('http://localhost:3000/usuarios', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });

    check(req, { 'User created': (r) => r.status === 201 });

    const userAuthorization = JSON.parse(req.body).authorization;

    return {
        data,
        userAuthorization
    };
}

export default function (data) {
    const urlP = 'http://localhost:3000/produtos';
    let product = createProduct();

    let res = http.post(urlP, JSON.stringify(product), {
        headers: { 'Content-Type': 'application/json', 'Authorization': data.userAuthorization }
    });

    sleep(1);
}  