import {Component, Input} from 'angular2/core';

@Component({
  selector:'led-button',
  template:`<button (click)="onClick(led)" >on</button>
  <button (click)="offClick(led)">off</button>`
})
export class LedButton{
  @Input() led;

  onClick(value){
    value.status = "On";
    value.color = "green";
  }
  offClick(value){}
}
