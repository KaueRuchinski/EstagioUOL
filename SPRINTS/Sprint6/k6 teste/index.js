import GetCustomer from "./GetCustomer";
import { group, sleep } from "k6";

export default function(){
    group('GETCUSTOMER - Controller Customer',() => {
        GetCustomer();
    
    });

    sleep(1);
}