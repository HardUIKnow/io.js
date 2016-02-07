import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from "angular2/http";
import {LedService} from "./client/to-service";
import {LedList} from "./client/to-list";
import {HttpService} from "./client/to-http";

@Component({
    selector: 'my-app',
    providers: [HTTP_PROVIDERS],
    directives: [LedList],
    template: `
    <div align="center" id="infobulles">
    <h1>Led Command</h1>
    <div>
      <led-list></led-list>
    </div>
    </div>
  `
})
export class App {

}
bootstrap(App, [LedService, HttpService])
    .catch(err => console.error(err));
