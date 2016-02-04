import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Component} from 'angular2/core';

@Component({
  selector:'to-http',
  templateUrl:'test',
  providers: [HTTP_PROVIDERS]
})
export class TOHTTP {
  public people: Object[];
  constructor(public http:Http) {
    http.get('test').subscribe(res => {
      this.people = res.json();
    });
  }
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }
}
