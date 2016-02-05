import {Component, Inject} from "angular2/core";
import {HTTP_PROVIDERS, Http, Headers} from "angular2/http";
import {LedService} from "./to-service";
import {LedModel} from "./to-model";
import {LedStatus} from "./to-status";
// import {LedButton} from "./to-button";

@Component({
  selector:'led-list',
  providers: [HTTP_PROVIDERS],
  directives:[LedStatus],
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
    <td><led-status [led]="led"></led-status></td>
    <td><button (click)="onClick(led)" >on</button>
    <button (click)="offClick(led)">off</button></td>
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
  // public ledArray:LedModel[]=[];

  constructor(
    public ledService:LedService,
    public http:Http
  ){
    this.http.get('/api/bears').subscribe(res => {
      this.ledService.leds = res.json();
      // this.ledArray = res.json();
      console.log(this.ledService.leds);
    });
    // console.log(this.data);
  }
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }

  onClick(value){
    value.status = "on";
    value.color = "green";
    console.log(value.name,value.status);
    var modChange = "name="+ value.name + "&pin=" + value.pin + "&status=" + value.status +"&color=" + value.color;
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.put('http://localhost:8080/api/bears/' + value._id,modChange,{
      headers: header
    })
    .subscribe(
      res => console.log(res.json())
    )
  }
  offClick(value){
    value.status = "off";
    value.color = "red";
    var modChange = "name="+ value.name + "&pin=" + value.pin + "&status=" + value.status +"&color=" + value.color;
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.put('http://localhost:8080/api/bears/' + value._id,modChange,{
      headers: header
    })
    .subscribe(
      res => console.log(res.json())
    )
    //console.log(this.buttonOffModel);
  }
}
