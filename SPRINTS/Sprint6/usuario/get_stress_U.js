import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; 

export const options = {
    stages: [
        { duration: '20s', target: 50 },
        { duration: '20s', target: 100 },
        { duration: '20s', target: 150 },
        { duration: '20s', target: 300 },
        { duration: '20s', target: 200 },
        { duration: '20s', target: 0 }, 
    ],
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<1000'] // Aumentando o limite para 1000ms
    }
};

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function() {
    const BASE_URL = 'http://localhost:3000';

    let res = http.get(`${BASE_URL}/usuarios`);

    check(res, { 'status é 200': (r) => r.status === 200 });
    
    sleep(1);
}