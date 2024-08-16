import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check,fail } from 'k6';

export let GetCustomerDuration = new Trend('get_customer_duration');
export let GetCustomerFailRate= new Trend('get_customer_fail_rate');
export let GetCustomerSuccessRate= new Trend('get_customer_success_rate');
export let GetCustomerReqs= new Trend('get_customer_reqs');

export default function(){

    let response = http.get('coloca localhost aq');

    GetCustomerDuration.add(response.timings.duration);
    GetCustomerReqs.add(1);
    GetCustomerFailRate.add(response.status == 0 || response.status > 399);
    GetCustomerSuccessRate.add(response.status < 399); // ou 200 direto
    // mais completo seria (response.status != 0 && response.status < 399);

    let durationMsg = 'Maximo de duração da minha requisição $(5000/1000)s';
    if(!check(response,{
        'maximo de duração' :  (r) => r.timings.durations < 5000,

    })){
        fail(durationMsg);
    }  

    sleep(1);

}