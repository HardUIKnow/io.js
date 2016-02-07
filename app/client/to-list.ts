import {Component, Inject} from "angular2/core";
import {LedService} from "./to-service";
import {HttpService} from "./to-http";
import {LedModel} from "./to-model";
import {FetchJsonPipe} from "./to-fetch.pipe";



@Component({
    selector: 'led-list',
    providers: [HttpService],
    template: `
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
                <td><button (click)="onClick(led)" >on</button>
                <button (click)="offClick(led)">off</button></td>
            </tr>
        </tbody>
  </table>`,
    pipes: [FetchJsonPipe]
})
export class LedList {

    constructor(public ledService:LedService,
                public http:HttpService) {
        this.http.getBears()
            .subscribe(
                res => this.ledService.leds = res,
                error => alert(error),
                () => console.log('Bears processed')
            );
    }

    onClick(value) {
        value.status = "on";
        value.color = "green";
        console.log(value.name, value.status);
        var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
        this.http.putBears(modChange, value._id)
    }

    offClick(value) {
        value.status = "off";
        value.color = "red";
        console.log(value.name, value.status);
        var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
        this.http.putBears(modChange, value._id)
    }
}
