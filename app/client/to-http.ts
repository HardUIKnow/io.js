import {Injectable} from "angular2/core";
import {Http,Headers} from "angular2/http";
import {LedService} from "./to-service";
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

    constructor(public http:Http) {}

    getBears() {
        return this.http.get('/api/bears')
            .map(res => res.json());
            //.subscribe(
            //    res => this.ledService.leds = res,
            //    error => alert(error),
            //    () => console.log('Bears processed')
            //);
    }


    putBears(modChange, bears_id) {

        var header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.put('http://localhost:8080/api/bears/' + bears_id, modChange, {
                headers: header
            })
            .subscribe(
                res => console.log(res.json())
            )
    }
}
