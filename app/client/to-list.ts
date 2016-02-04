import {Component, Inject} from "angular2/core";
import {HTTP_PROVIDERS, Http, Headers} from "angular2/http";
import {LedService} from "./to-service";
// import {LedModel} from "./to-model";

@Component({
  selector:'led-list',
  providers: [HTTP_PROVIDERS],

  // directives:[LedService],
  template:`
  <table>
    <thead>
      <th>Component</th>
      <th>Status</th>
      <th>Action</th>
    </thead>
    <tbody *ngFor="#led of ledService.leds">
    <tr>
    <td>{{led.name}}</td>
    <td>{{led.status}}</td>
    <td>{{index}}<button (click)="onClick(led)" >on</button>
    {{index}}<button (click)="offClick(led)" >off</button></td>
    </tr>
    </tbody>
  </table>`,
  styles:[`
    h1 {
      color: #f39c12
    }
    div {
      padding: 10px;
      color: #bdc3c7;
    }
    table, th, td {
      border-bottom : 2px solid grey;
      border-collapse: collapse;
      padding: 10px;
      text-align: center;
      color: #bdc3c7;
    }
    tr:hover {
      background-color: #7f8c8d;
    }
  `]
})
export class LedList{

  constructor(public ledService:LedService){
    console.log(this.ledService.leds)
  }

  onClick(value){
    value.status = "on";
    console.log(value.status)
  }
  offClick(value){
    value.status = "off";
    console.log(value.status)
    //console.log(this.buttonOffModel);
  }
}
