import {Injectable} from "angular2/core";
import {LedModel} from "./to-model";

@Injectable()
export class LedService {
    public leds:LedModel[] = [];
    //constructor(public http:Http) {
    //  this.http.get('http://localhost:8080/api/bears').subscribe(res => {
    //    this.leds = res.json();
    //  });
    //}
    // active:boolean = false;
    // toggleActiveState() {
    //   this.active = !this.active;
    // }


}
