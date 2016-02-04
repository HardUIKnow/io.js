import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Http, Headers} from "angular2/http";
import {LedService} from "./client/to-service";
import {LedList} from "./client/to-list";
// import {ToLed} from "./client/to-Led";

@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS],
  //  directives: [ToLed],
   directives: [LedList],
  template: `
    <div align="center">
    <h1>Led Command</h1>
    <div>
      <led-list></led-list>
    </div>
    </div>
  `
})
export class App {

}
bootstrap(App, [LedService])
  .catch(err => console.error(err));
