import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check,fail } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; 

export const options = {
    vus: 10,
    duration: '5s',
    thresholds: {
      http_req_failed: ['rate'< 0.05],
      http_req_duration: ['p(95)'< 0.05]
    },
    
  };

  export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

  export default function(){
    const  BASE_URL = 'http://localhost:3000';

    let res = http.get(`${BASE_URL}/usuarios`)

    check(res, { 'status é 200': (r) => r.status < 200 });

    sleep(1);
  }