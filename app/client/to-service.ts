import {Injectable} from "angular2/core";
import {LedModel} from "./to-model";

@Injectable()
export class LedService{
  leds = [
    {name:"one",pin:1,status:"off",color:"red"},
    {name:"two",pin:2,status:"off",color:"red"},
    {name:"four",pin:2,status:"off",color:"red"},
    {name:"five",pin:2,status:"off",color:"red"},
    {name:"three",pin:3,status:"off",color:"red"}
    ];
  // constructor(public http:Http) {
  //   this.http.get('http://localhost:8080/api/bears').subscribe(res => {
  //     this.leds = res.json();
  //   });
  // }
  // active:boolean = false;
  // toggleActiveState() {
  //   this.active = !this.active;
  // }


}
