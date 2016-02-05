import {Component} from "angular2/core";
import {HTTP_PROVIDERS, Http, Headers} from 'angular2/http';
import {NgFor} from 'angular2/common';

@Component({
  selector:'my-led',
  providers: [HTTP_PROVIDERS],
  template:`<h1>Led Command</h1>

  <div>
  <table>
    <thead>
      <th>Component</th>
      <th>Status</th>
      <th>Action</th>
    </thead>
    <tbody *ngFor="#opt of boards">
    <tr>
    <td>{{opt.name}}</td>
    <td>{{opt.status}}</td>
    <td>
    <button (click)="clickOn(opt)">On</button>
    <button (click)="clickOff(opt)">Off</button>
    </td>
    </tr>
    <tbody>
  </table></div>`,
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
export class ToLed{
  public boards: Object[];

  constructor(public http:Http) {
    this.http.get('http://localhost:3000/api/bears').subscribe(res => {
      this.boards = res.json();
    });
  }
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }

  // getLed(){
  //   this.http.get('http://localhost:8080/api/bears').subscribe(res => {
  //     this.boards = res.json();
  //   });
  // }

  clickOn(value){
    // var tochange;
    value.status = "on";
    value.color = "green";
    console.log(value.name,value.status);
    var modChange = "name="+ value.name + "&pin=" + value.pin + "&status=" + value.status +"&color=" + value.color;
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.put('http://localhost:3000/api/bears/' + value._id,modChange,{
      headers: header
    })
    .subscribe(
      res => console.log(res.json())
    )

    // for(var num in this.boards){
    //   tochange = this.boards[num];
    //   if(tochange.name == value){
    //     tochange.status = "On";
    //     tochange.color = "green";
    //   }
    // }
        console.log(this.boards);
  }
  clickOff(value){
    value.status = "off";
    value.color = "red";
    var modChange = "name="+ value.name + "&pin=" + value.pin + "&status=" + value.status +"&color=" + value.color;
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.put('http://localhost:3000/api/bears/' + value._id,modChange,{
      headers: header
    })
    .subscribe(
      res => console.log(res.json())
    )

    // var tochange;
    // for(var num in this.boards){
    //   tochange = this.boards[num];
    //   if(tochange.name == value){
    //     tochange.status = "Off";
    //     tochange.color = "red";
    //   }
    // }
    console.log(this.boards);
  }
}
