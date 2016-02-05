import {Component, Input} from 'angular2/core';

@Component({
  selector:'led-status',
  template:'{{led.status}}'
})
export class LedStatus{
  @Input() led;
}
