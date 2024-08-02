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
    const req =  http.post('http://localhost:3000/login', JSON.stringify({email: create.email, password: create.password}), {
       Headers: { 'Content-Type': 'application/json' }
   })
   
 }